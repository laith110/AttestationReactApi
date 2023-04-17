import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../App.css';

const Header = () =>{
  return(
    <div className="header">
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link to={'/'}>A&B</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={'/'}>
                Главная
                </Link>
              </Nav.Link>
            <Nav.Link>
            <Link to={'/favorites'}>
              Избраное
              </Link>
              </Nav.Link>
            <Nav.Link >
            <Link to={'/cart'}>
              Корзина
              </Link>
            </Nav.Link>
            <Nav.Link >
            <Link to={'/description'}>
              Описанпие
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary">
                  Войти
            </Button>
          </Nav>
        </Container>
      </Navbar>


    </div>
  )
}
export default Header;