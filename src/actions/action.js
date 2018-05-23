
let actionGetProducts = () => {
    return {
        type: 'GET_PRODUCTS'
    }
}

let addProductToCart = () => {
    console.log("Hejsan");
    return {
        type: 'ADD_TO_CART'
    }
}

export { actionGetProducts, addProductToCart };