import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {Link} from 'react-router-dom';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import React from 'react';
import { getAllCategories } from '../../services/products';

const NavBarComponent = () => {
  const [categories, setCategories] = React.useState([])
  React.useEffect(()=>{
    getAllCategories()
    .then((res)=>{
      setCategories(res.data)
    })
    .catch((err)=>{
      console.error(err)
    })
  }, [categories])
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand><Link to={"/"}>Sabores del Alma</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link><Link to={"/"}>Home</Link></Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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