import React from 'react';
import Names from '../Names/Names';
import './Cart.css'

const Cart = (props) => {
    
    let total = 0;
    for (const salary of props.cart) {
        total = total + salary;
        
        
    }

     const AllName = props.Name;


    return (
        <div className="cart-style">
            <h1>Total Added:{props.cart.length}</h1>
            <h2>Total Monthly Salary :{total}</h2>
            <h1>Guard Added: </h1>
            {
                AllName.map(name => <Names key="{ddad{$}}" Name={name}></Names>)
            }
        </div>
    );
};

export default Cart;