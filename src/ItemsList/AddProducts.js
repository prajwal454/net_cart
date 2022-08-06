import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './AddProducts.css'

export default function AddProducts(props) {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState();
  
 

  return (
    <div>
      <Form className="mb-5 additems" onSubmit={(e)=>{
        
        e.preventDefault()
        props.addItems(productName,Number(productPrice))
      }}>
        <Form.Group className="mb-3 " controlId="inputName">
          <Form.Label> Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
          />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="enter product price" 
          onChange={(e)=>setProductPrice(Number(e.target.value))} 
          value={productPrice}/>
        </Form.Group>

        <Button variant="primary" type="submit" >
          ADD
        </Button>
      </Form>
    </div>
  );
}
