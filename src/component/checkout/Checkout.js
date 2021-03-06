import React from 'react';
import './Checkout.scss';
import {
    selectCartItems,
    selectCartTotalPrice,
} from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CheckoutItem from '../checkout-item/CheckoutItem';
import StripButton from '../strip-button/StripButton';

const Checkout = ({ cartItems, total }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className="total">TOTAL ${total}</div>
            <div className="test-warning">
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </div>
            <StripButton price={total} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotalPrice,
});

export default connect(mapStateToProps)(Checkout);
