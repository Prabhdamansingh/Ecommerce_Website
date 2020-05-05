import {
    TOGGLE_CART_HIDDEN,
    ADD_ITEM,
    REMOVE_ITEM,
    CLEAR_ITEM,
} from './cart.type';
import { addItemToCart, removeItemToCart } from './cart.utils';

const intialState = {
    hidden: true,
    cartItems: [],
};

const cartReducer = (state = intialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };

        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, payload),
            };
        case CLEAR_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (cartItem) => cartItem.id !== payload.id
                ),
            };
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemToCart(state.cartItems, payload),
            };
        default:
            return state;
    }
};
export default cartReducer;
