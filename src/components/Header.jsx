import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../App.css';
import style from '../style.css';

const Header = () =>{
  return(
    <div className="header">
       <Navbar >
        <Container>
          <Navbar.Brand><Link to={'/'}><h3>Чайный домик</h3></Link></Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link>
              <Link to={'/'}>
                <p className="p1">Доставка</p>
                </Link>
              </Nav.Link>
            <Nav.Link>
            <Link to={'/favorites'}>
            <p className="p1">Избраное</p>
              </Link>
              </Nav.Link>
            <Nav.Link >
            <Link to={'/cart'}>
            <p className="p1">Корзина</p>
              </Link>
            </Nav.Link>
            <Nav.Link >
            <Link to={'/description'}>
            <p className="p1">Описание</p>
              </Link>
            </Nav.Link>
            <Nav.Link >
            <Link to={'/form'}>
            <p className="p1">Войти</p>
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>


    </div>
  )
}
export default Header;