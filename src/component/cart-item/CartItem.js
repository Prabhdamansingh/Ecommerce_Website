import React from 'react';
import './cartItem.scss';

const cartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" />
            <div className="pad">
                <span className="name">{name}</span>
                <br></br>
                <span className="price">
                    {quantity} X ${price}
                </span>
            </div>
        </div>
    );
};

export default cartItem;
