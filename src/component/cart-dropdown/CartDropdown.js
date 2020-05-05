import React from 'react';
import './CartDropdown.scss';
import CustomButton from '../custombutton/CustomButton';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty </span>
                )}
            </div>
            <CustomButton
                onClick={() => {
                    history.push('/checkout');
                    toggleCartHidden();
                }}
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});
const mapDispatchToProps = {
    toggleCartHidden,
};
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
