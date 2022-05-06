import React from 'react';
import ReactDOM from 'react-dom/client';
import { Form, Button } from "react-bootstrap";


  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Login/>);

  export default function Login (){
    return (
      <div className='Card w-50 border border-dark container mt-5'>
        <h2 className="card-header">Log In</h2>
        <div className='card-body'>
        <Form>
      <Form.Group className="mb-3" controlId="userName">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="User Name" />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="info" type="submit">
        Submit
      </Button>
    </Form>
        </div>
      </div>
    );
  }