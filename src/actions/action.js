
let actionGetProducts = () => {
    return {
        type: 'GET_PRODUCTS'
    }
}

let addProductToCart = (itemName, itemPrice) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            name: itemName,
            price: itemPrice
        }
    }
}

let changeView = () => {
    return {
        type: 'CHANGE_VIEW'
    }
}

export { changeView, addProductToCart };