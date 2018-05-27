
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

let changeView = () => {
    return {
        type: 'CHANGE_VIEW'
    }
}

export { changeView, modifyCart };