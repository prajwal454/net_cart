import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function Products(props) {
  return (
    <div className="row mb-3">
      <div className="col-4">
        <h3>
          {props.pro_var.name}
          <Badge bg="secondary">₹{props.pro_var.price}</Badge>
        </h3>
      </div>
      <div className="col-4">
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="secondary"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </Button>
          <Button variant="secondary">{props.pro_var.quantity}</Button>
          <Button
            variant="secondary"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </Button>
        </ButtonGroup>
      </div>
      <div className="col-2">
        {props.pro_var.quantity * props.pro_var.price}
      </div>
      <div className="col-2">
        <button className="btn btn-danger" onClick={()=>{props.removeButton(props.index)}}>Remove</button>
      </div>
    </div>
  );
}
