import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default class NavBar extends React.Component{
  render(){
    return (
      <Navbar className='container' bg="secondary" expand="md">
  <Container>
    <Navbar.Brand href=" ">Navigation Bar</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href=" ">Button 1</Nav.Link>
        <Nav.Link href=" ">button 2</Nav.Link>
        <Nav.Link href=" ">Button 3</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
  }
}