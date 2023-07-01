import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Cartstate } from './Context';
function Singleproduct({prod}) {
  const {state:{cart},dispatch,}=Cartstate()
    return (
        <div>
            <Card style={{ width: '18rem' }}>
     <img src={prod.image} alt=''/>
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          <p>{prod.desc}</p>
          <h5>${prod.price}</h5>
        </Card.Text>
        {cart.some((p)=>p.id===prod.id)?(
        <Button variant="danger" onClick={()=>dispatch({
          type:"removefromcart",
          payload:prod,
        })}>remove</Button>)
        :(
        <Button variant="primary" onClick={()=>dispatch({
          type:"addtocart",
          payload:prod,
        })} className='ms-3'
        disabled={!prod.stock}>{!prod.stock? "Out of stock":"Add to Cart"}</Button>)}
      </Card.Body>
    </Card>
        </div>
    );
}

export default Singleproduct;