let actionIncreaseByOne = () => {
	return {
		type: 'INCREASE_BY_ONE'
	}
}
let actionUpdate = (amount) => {
	return {
		type: 'UPDATE',
		amount: amount
	}
}

let actionGetProducts = () => {
    return {
        type: 'GET_PRODUCTS'
    }
}

export { actionGetProducts };