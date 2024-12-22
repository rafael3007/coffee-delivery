export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["ADD_ITEM"] = "ADD_ITEM";
    ActionTypes["REMOVE_ITEM"] = "REMOVE_ITEM";
    ActionTypes["INCREMENT_ITEM_QUANTITY"] = "INCREMENT_ITEM_QUANTITY";
    ActionTypes["DECREMENT_ITEM_QUANTITY"] = "DECREMENT_ITEM_QUANTITY";
    ActionTypes["CHECKOUT_CART"] = "CHECKOUT_CART";
})(ActionTypes || (ActionTypes = {}));
export function addItemAction(item) {
    return {
        type: ActionTypes.ADD_ITEM,
        payload: {
            item,
        },
    };
}
export function removeItemAction(itemId) {
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: {
            itemId,
        },
    };
}
export function incrementItemQuantityAction(itemId) {
    return {
        type: ActionTypes.INCREMENT_ITEM_QUANTITY,
        payload: {
            itemId,
        },
    };
}
export function decrementItemQuantityAction(itemId) {
    return {
        type: ActionTypes.DECREMENT_ITEM_QUANTITY,
        payload: {
            itemId,
        },
    };
}
export function checkoutCartAction(order, callback) {
    return {
        type: ActionTypes.CHECKOUT_CART,
        payload: {
            order,
            callback,
        },
    };
}
