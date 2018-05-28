
let modifyCart = (itemName, itemPrice, itemQuantity) => {
    return {
        type: 'MODIFY_CART',
        payload: {
            name: itemName,
            price: itemPrice,
            quantity: itemQuantity
        }
    }
}

let changeView = (view) => {
    return {
        type: 'CHANGE_VIEW',
        view: view
    }
}

export { changeView, modifyCart };