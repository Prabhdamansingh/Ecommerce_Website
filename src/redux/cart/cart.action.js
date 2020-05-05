import { TOGGLE_CART_HIDDEN, ADD_ITEM } from './cart.type';

export const toggleCartHidden = () => (dispatch) =>
    dispatch({
        type: TOGGLE_CART_HIDDEN,
    });

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item,
});
