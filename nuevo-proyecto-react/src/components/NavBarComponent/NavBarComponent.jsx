import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {Link} from 'react-router-dom';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import React from 'react';
import { UseCategory } from '../../hooks/UseCategory';

const NavBarComponent = () => {
  const {categories} = UseCategory();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand><Link to={"/"}>Sabores del Alma</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <NavDropdown title="Categorias" id="basic-nav-dropdown">
            {categories.map((category)=>{
              return (
                <NavDropdown.Item key={category.slug}>
                  <Link to={`/category/${category.slug}`}>
                    {category.name}
                  </Link>
                </NavDropdown.Item>
              )
            })}
        </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <CartWidgetComponent />
    </Container>
  </Navbar>
  )
}

export default NavBarComponent