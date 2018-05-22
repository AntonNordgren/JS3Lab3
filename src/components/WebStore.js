
import React, { Component } from 'react';
import '../App.css';

import {actionGetProducts} from '../actions/action.js';

import { connect } from 'react-redux';

class WebStore extends Component {
    render() {
        return (
            <div>
                <div className="navBar">NavBar</div>
                <div className="content">
                    Content
                    <div>
                        test: {this.props.test}
                    </div>
                </div>
                <div className="footer">Footer</div>
            </div>
        );
    }
}
let mapStateToProps = state => {
    return {
        test: state.test
    };
}

export default connect(mapStateToProps)(WebStore);