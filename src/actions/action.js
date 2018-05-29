
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

let addNewProduct = (name, price, img) => {
    return {
        type: 'ADD_NEW_PRODUCT',
        payload: {
            name: name,
            price: price,
            img: img
        }
    }
}

let deleteExistingProduct = (name) => {
    return {
        type: 'DELETE_EXISTING_PRODUCT',
        name: name
    }
}

export { changeView, modifyCart, addNewProduct, deleteExistingProduct };