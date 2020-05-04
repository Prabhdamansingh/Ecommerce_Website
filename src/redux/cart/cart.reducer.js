import { TOGGLE_CART_HIDDEN } from './cart.type';

const intialState = {
    hidden: true,
};

const cartReducer = (state = intialState, action) => {
    const { type } = action;
    switch (type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };
        default:
            return state;
    }
};
export default cartReducer;
