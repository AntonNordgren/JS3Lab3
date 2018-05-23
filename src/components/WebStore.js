
import React, { Component } from 'react';
import '../App.css';

import {actionGetProducts, addProductToCart} from '../actions/action.js';

import { connect } from 'react-redux';

class WebStore extends Component {
    render() {
        const productsList = this.props.products.map( x => (
            <div key={x.name} className="productDiv">
                <h1>{x.name}</h1>
                <img src = {x.img} width="100px" height="200px"/>
                <div className="buttonAndPriceDiv">
                    <h2>{x.price} Kr</h2>
                    <button onClick={event => this.props.dispatch(addProductToCart())} className="buyButton">Köp</button>
                    <h3>{x.quantity} i lager.</h3>
                </div>
            </div>
        ));
        return (
            <div>
                <div className="navBar"></div>
                <div className="content">
                    {productsList}
                </div>
                <div className="footer"></div>
            </div>
        );
    }
}
let mapStateToProps = state => {
    return {
        products: state.product
    };
}

export default connect(mapStateToProps)(WebStore);