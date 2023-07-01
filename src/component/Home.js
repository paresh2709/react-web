import React from 'react';
import Filters from './Filters'
import { Cartstate } from './Context';
import Singleproduct from './Singleproduct'
function Home() {
    const {state:{products}}=Cartstate()
    console.log(products)

    return (
        <div className='d-flex flex-row mt-2'>
           <div className='bg-dark'> <Filters/></div>
           <div className='row row-cols-1 row-cols-md-4'>{products.map((prod)=>{
            return<Singleproduct prod={prod} key={prod.id}/>})
            }</div>
           
           
           
            
        </div>
    );
}

export default Home;