import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Cartstate } from './Context';
import {BsFillCartFill} from "react-icons/bs";
import {Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
function Header() {
  const{state:{cart},dispatch,}=Cartstate()
    return (
        <div>
             <Navbar bg="dark" variant="dark" className=''>
        <Container>
          <Navbar.Brand href="#home">Online shopping</Navbar.Brand>
          <Form>
            <Form.Control
              type="search"
              placeholder="Search"
              className="m-auto"
              aria-label="Search"
              style={{width:500}}
            />
            
          </Form>
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
     <BsFillCartFill/> <sup>{cart.length}</sup>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {(cart.length>0)?(<>
        {cart.map((prod)=>(
        <div className="d-flex-row justify-content-evenly align-items-center" 
        style={{width:"18rem"}}>
          <div>
            <img src= {prod.image} alt={prod.name} className='img-fluid' height="80"
            widht="80"/></div>
            <div>{prod.name}</div>
            <div>{prod.price}</div>
            <div><i class="fa-solid fa-trash" onClick={()=>dispatch({
              type:"removefromcart",
              payload:prod,
            })}></i>
             </div>
          </div>
             )) }<Link to="/Cart">
              <Button variant='primary'>Go to Cart</Button>
            </Link></>):(<span>cart is empty</span>)}
      </Dropdown.Menu>
    </Dropdown>
        </Container>
      </Navbar>
        </div>
    );
}

export default Header;