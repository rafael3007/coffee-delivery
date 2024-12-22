import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useEffect, useReducer } from 'react';
import { addItemAction, checkoutCartAction, decrementItemQuantityAction, incrementItemQuantityAction, removeItemAction, } from '../reducers/cart/actions';
import { cartReducer } from '../reducers/cart/reducer';
import { useNavigate } from 'react-router-dom';
export const CartContext = createContext({});
export function CartContextProvider({ children }) {
    const [cartState, dispatch] = useReducer(cartReducer, {
        cart: [],
        orders: [],
    }, (cartState) => {
        const storedStateAsJSON = localStorage.getItem('@coffee-delivery:cart-state-1.0.0');
        if (storedStateAsJSON) {
            return JSON.parse(storedStateAsJSON);
        }
        return cartState;
    });
    const navigate = useNavigate();
    const { cart, orders } = cartState;
    function addItem(item) {
        dispatch(addItemAction(item));
    }
    function removeItem(itemId) {
        dispatch(removeItemAction(itemId));
    }
    function checkout(order) {
        dispatch(checkoutCartAction(order, navigate));
    }
    function incrementItemQuantity(itemId) {
        dispatch(incrementItemQuantityAction(itemId));
    }
    function decrementItemQuantity(itemId) {
        dispatch(decrementItemQuantityAction(itemId));
    }
    useEffect(() => {
        if (cartState) {
            const stateJSON = JSON.stringify(cartState);
            localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON);
        }
    }, [cartState]);
    return (_jsx(CartContext.Provider, { value: {
            addItem,
            cart,
            orders,
            decrementItemQuantity,
            incrementItemQuantity,
            removeItem,
            checkout,
        }, children: children }));
}
