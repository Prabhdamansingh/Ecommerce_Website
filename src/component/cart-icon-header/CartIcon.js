import React from 'react';
import { ReactComponent as ShoppingIcon } from '../assets/11.2 shopping-bag.svg.svg';
import './CartIcon.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartIcon = ({ toggleCartHidden }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
};

const mapDispatchToProps = {
    toggleCartHidden,
};

export default connect(null, mapDispatchToProps)(CartIcon);
