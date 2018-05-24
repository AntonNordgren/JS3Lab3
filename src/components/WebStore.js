
import React, { Component } from 'react';
import '../App.css';

import { changeView } from '../actions/action.js';

import { connect } from 'react-redux';

class WebStore extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: "products"
        }
    }

    render() {
        let currentContent;

        if (this.props.view === "products") {
            const productsList = this.props.products.map(x => (
                <div key={x.name} className="productDiv">
                    <h1>{x.name}</h1>
                    <img src={x.img} width="100px" height="200px" />
                    <div className="buttonAndPriceDiv">
                        <h2>{x.price} Kr</h2>
                        <button className="buyButton">Köp</button>
                    </div>
                </div>
            ));
            currentContent = <div>
                <div className="content">
                    {productsList}
                </div>
            </div>
        }
        else if( this.props.view === "cart") {
            currentContent = <div>
                <div className="content">

                </div>
            </div>
        }

        return (
            <div>
                <div className="navBar">
                    <img onClick={event => this.props.dispatch(changeView())}
                        src="https://www.iconsdb.com/icons/preview/white/cart-44-xxl.png"
                        className="cartIcon" />
                </div>
                <div className="content">
                    {currentContent}
                </div>
                <div className="footer"></div>
            </div>
        );
    }
}

let mapStateToProps = state => {
    return {
        products: state.products,
        view: state.view
    };
}

export default connect(mapStateToProps)(WebStore);