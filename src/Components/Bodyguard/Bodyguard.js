import React from 'react';
import "./Bodyguard.css"


const Bodyguard = (props) => {

    const { name, email, age, gender, salary, picture } = props.bodyguard;
    // 
    return (
        
        <div className="bodyguard-style">
            <div className="bodyguard-img">
                <img src={picture} alt="" />
        </div>
        <div className="bodyguard-info">
            <h3>Name:{name }</h3>
            <h4>Gender:{gender }</h4>
            <h5>Age:{age}</h5>
            <h5>Email:{email }</h5>
                <h5>Salary:{salary}</h5>
                {/* Button for Add to Cart and Make a array of name */}
                <button
                    onClick={() => {
                        props.AddToCart(salary);
                        props.CollectName(name)
                    }}>
                    <i className="fas fa-luggage-cart">  </i>
                     Add Me
                </button>
               
               
        </div>
        </div>
    );
};

export default Bodyguard;