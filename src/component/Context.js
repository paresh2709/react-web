import React, { createContext, useContext, useReducer } from 'react';
import { cartReducer } from './Reducers';
const Cart=createContext()
function Context({children}) {
    const products=[
        {
            id:1,
            image:'./images/9.jpg',
            name:'Cosmetics',
            desc:'Metalic Lipstick(crimson)',
            price:12.99,
            qty:0,
            stock:5
        },
        {
            id:2,
            image:'./images/26.jpg',
            name:'Shoes',
            desc:'Textile Platform Sneakers',
            price:59.99,
            qty:0,
            stock:10
        },
        {
            id:3,
            image:'./images/27.jpg',
            name:'Accessories',
            desc:'Polarized Sunglasses',
            price:17.99,
            qty:0,
            stock:8
        },
        {
            id:4,
            image:'./images/28.jpg',
            name:'Shorts',
            desc:'Leather Platform Sandels',
            price:79.99,
            qty:0,
            stock:15
        },
        {
            id:5,
            image:'./images/29.jpg',
            name:'Shorts',
            desc:'Shorts Chino Shorts',
            price:24.99,
            qty:0,
            stock:10
        },
        {
            id:6,
            image:'./images/30.jpg',
            name:'T-Shirts',
            desc:'T-Shirt with Motif',
            price:13.99,
            qty:0,
            stock:7
        },
        {
            id:7,
            image:'./images/32.jpg',
            name:'Hats & Caps',
            desc:'Cap with Applique',
            price:15.99,
            qty:0,
            stock:5
        },
        {
            id:8,
            image:'./images/33.jpg',
            name:'T-Shirts',
            desc:'Regular Fit Cotton Shirt',
            price:19.99,
            qty:0,
            stock:9
        },
        {
            id:9,
            image:'./images/34.jpg',
            name:'Accessories',
            desc:'Polarized Sunglasses',
            price:37.99,
            qty:0,
            stock:3
        },
        {
            id:10,
            image:'./images/35.jpg',
            name:'Shoes',
            desc:'Leather Mens Sneakers',
            price:45.99,
            qty:0,
            stock:10
        },
        {
            id:11,
            image:'./images/36.jpg',
            name:'Bags',
            desc:'Swedish Bagpack',
            price:68.95,
            qty:0,
            stock:6
        },
        {
            id:12,
            image:'./images/37.jpg',
            name:'Accessories',
            desc:'Stainless Steel Watches',
            price:542.95,
            qty:0,
            stock:18
        },
        {
            id:13,
            image:'./images/40.jpg',
            name:'Clothing',
            desc:'Girls Denim Jacket',
            price:24.99,
            qty:0,
            stock:0
        },
        {
            id:14,
            image:'./images/41.jpg',
            name:'Shoes',
            desc:'Textile Ballett Flats',
            price:16.50,
            qty:0,
            stock:0
        },
        {
            id:15,
            image:'./images/42.jpg',
            name:'T-shirts',
            desc:'Boys T-shirt with motif',
            price:17.99,
            qty:0,
            stock:0
        },
        {
            id:16,
            image:'./images/43.jpg',
            name:'Accessories',
            desc:'Dotted Shoulder Bag',
            price:23.99,
            qty:0,
            stock:2
        },
    ]
    const [state,dispatch]=useReducer(cartReducer,{
        products:products,
        cart:[]

    })
    return (
        <Cart.Provider value={{state,dispatch}}>
            {children}
        </Cart.Provider>
    )
}

export default Context
export const Cartstate=()=>{
    return useContext(Cart)
}