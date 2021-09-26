import React, { useEffect, useState } from 'react';
import Bodyguard from '../Bodyguard/Bodyguard';
import './Body.css'
import Cart from './../Cart/Cart';





const Body = () => {

    const [bodyguards, setBodyguards] = useState([]);
    const [cart, setCart] = useState([]);
    const [name, setName] = useState([]);


    // Collect Salary to calculate Total Amount and See total Added
    const AddToCart = bodyguard => {
        
            const latestCart = [...cart, bodyguard];
            setCart(latestCart);
        
        
        
        

    }
    // Collect Name To Show Name
    const CollectName = names => {
        const AllName = [...name, names];
        setName(AllName);
    }

    useEffect(() => {
        fetch('./generated.json')
            .then(res => res.json())
            .then(data => setBodyguards(data));
    },[])
    return (
        <div className="Body-style">
            <div className="guardlist">
                <h1>Choose Your Guards Form Here!</h1>
                <div className="bodyguards-ui">
                    {
                    bodyguards.map(bodyguard =>
                        <Bodyguard
                            key={bodyguard.name}
                            bodyguard={bodyguard}
                            AddToCart={AddToCart}
                            CollectName={CollectName}
                        >
                        </Bodyguard>)
                }
                </div>
                
           </div>
            <div className="checkout">
                <Cart
                    cart={cart}
                    Name={name}>

                </Cart>
                
           </div>
        </div>
    );
};

export default Body;