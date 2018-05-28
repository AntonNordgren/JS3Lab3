
import React, { Component } from 'react';
import '../App.css';

import { changeView, modifyCart } from '../actions/action.js';

import { connect } from 'react-redux';

class WebStore extends Component {
    render() {

        let currentContent;

        // Products View
        if (this.props.view === "products") {
            const productsList = this.props.products.map(x => (
                <div key={x.name} className="productDiv">
                    <h1>{x.name}</h1>
                    <img className="productImg" alt={x.name} src={x.img} width="100px" height="230px" />
                    <div className="buttonAndPriceDiv">
                        <h2>{x.price.toFixed(2)} Kr</h2>
                        <button onClick={event => this.props.dispatch(modifyCart(x.name, x.price, 1))} className="buyButton">Köp</button>
                    </div>
                </div>
            ));

            currentContent = <div>
                <div className="productContent">
                    {productsList}
                </div>
            </div>
        }
        // Cart View
        else if (this.props.view === "cart") {
            console.log(this.props.cartList);
            const cartList = this.props.cartList.map(x => (
                <div className="cartItem" key={x.name}>
                    {x.name} {x.quantity + "st"}
                    <div className="cartItemButtonDiv">
                        <button onClick={event => this.props.dispatch(modifyCart(x.name, x.price, 1))}>+</button>
                        <button onClick={event => this.props.dispatch(modifyCart(x.name, x.price, -1))}>-</button>
                        <button onClick={event => this.props.dispatch(modifyCart(x.name, x.price, -x.quantity))}>Ta Bort</button>
                    </div>
                </div>
            ));

            currentContent = <div>
                <div className="cartContent">
                    {cartList}
                    <div className="sumText">
                        Summa:  {this.props.totalPrice.toFixed(2)} kr
                    </div>
                </div>
            </div>
        }

        // History View
        else if (this.props.view === "history") {
            currentContent = <div>
                <div className="historyContent">
                    History
                </div>
            </div>
        }

        // Admin view
        else if (this.props.view === "admin") {
            currentContent = <div>
                <div className="adminContent">
                    Admin
                </div>
            </div>
        }

        return (
            <div>
                <div className="navBar">
                    <div className="adminAndHistoryButtons">
                        <button onClick={event => this.props.dispatch(changeView("products"))}>Products</button>
                        <button onClick={event => this.props.dispatch(changeView("history"))}>History</button>
                        <button onClick={event => this.props.dispatch(changeView("admin"))}>Admin</button>
                    </div>
                    <img onClick={event => this.props.dispatch(changeView("cart"))}
                        src="https://www.iconsdb.com/icons/preview/white/cart-44-xxl.png"
                        className="cartIcon"
                        alt="cartIcon" />
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
        view: state.view,
        totalPrice: state.totalPrice,
        cartList: state.cartList
    };
}

export default connect(mapStateToProps)(WebStore);