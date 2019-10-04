import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class ShoppingCart extends Component {
    
    render() {
        return (
            <li>
                <Link to='/cart'>
                    <button className="btn btn-light navbar-btn icon-header">
                        <span className="glyphicon glyphicon-shopping-cart"></span>
                        <span class="badge">{this.props.badge}</span>
                    </button>
                </Link>
            </li>
        );
    }
    
}
const mapStateToProps = state => {
    return {
        badge: state.page.badge
    }
}
export default connect(mapStateToProps)(ShoppingCart);