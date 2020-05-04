import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../custombutton/CustomButton';
import './CartDropdown.scss';

const CartDropdown = (props) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

CartDropdown.propTypes = {};

export default CartDropdown;
