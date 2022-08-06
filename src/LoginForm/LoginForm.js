import React, { useState } from "react";
import "./LoginForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function LoginForm() {
  const [inputEmail, setInputEmail] = useState("prajwal@123");
  const [inputPassword, setInputPassword] = useState("12345678");
  

  const logInHandler =(e)=>{
    e.preventDefault()

    if(inputEmail === "prajwal@123" && inputPassword === 12345678){
        console.log("Welcome LogIN SuccessFull")
    }
    else{
        alert("Please enter Right Email OR Password")
    }


  }
  return (
    <div>
      <Form className="login" onSubmit={logInHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={(e) => setInputEmail(e.target.value)}
           
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setInputPassword(e.target.value)}
            

          />
        </Form.Group>

        <Button variant="primary" type="submit">
          LogIN
        </Button>
      </Form>
    </div>
  );
}
