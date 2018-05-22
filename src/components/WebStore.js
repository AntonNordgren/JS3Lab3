
import React, { Component } from 'react';
import '../App.css';

import {actionGetProducts} from '../actions/action.js';

import { connect } from 'react-redux';

class WebStore extends Component {
    render() {
        const productsList = this.props.products.map( x => (
            <div className="productDiv">
                <h1>{x.name}</h1>
                <img src = {x.img} width="100px" height="200px"/>
                <div className="buttonAndPriceDiv">
                    <h2>{x.price} Kr</h2>
                    <button className="buyButton">Buy</button>
                </div>
            </div>
        ));
        return (
            <div>
                <div className="navBar">NavBar</div>
                <div className="content">
                    <div>
                        {productsList}
                    </div>
                </div>
                <div className="footer">Footer</div>
            </div>
        );
    }
}
let mapStateToProps = state => {
    console.log(state.product[0]);
    return {
        products: state.product
    };
}

export default connect(mapStateToProps)(WebStore);