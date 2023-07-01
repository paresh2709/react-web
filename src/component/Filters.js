import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Filters() {
    return (
        <div className='bg-secondary text-white'style={{width:"14rem"}}>
            <h4>Filter option</h4>
 <Form.Check type="radio" label="Ascending" name="r1" aria-label="radio 1" />
 <Form.Check type="radio" label="descending" name="r1" aria-label="radio 1" />
<Form.Check label="out of stock" aria-label="option 1"/>
<Button variant="light" className='mt-4 mb-5'>clear Filter</Button>{' '}
        </div>
    );
}

export default Filters;