import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import './style.css';

function NavbarBootsrap() {
  return (
    <div>
    <Nav justify variant="tabs" defaultActiveKey="/home" className="bg-dark fw-semibold">
      <h5 className="logo">Breaking<span className="new">News</span></h5>
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1 bg-light">Link 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link 2</Nav.Link>
      </Nav.Item>
  
    </Nav>

    </div>
  );
}

export default NavbarBootsrap;