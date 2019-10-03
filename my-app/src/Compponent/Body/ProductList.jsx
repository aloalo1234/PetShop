import React, { Component } from 'react'
import './../../Style/Body.css'
import {connect} from 'react-redux'

class ProductList extends Component {
    render() {

        return (
            <div className="ProductList">
                {this._renderData()}
            </div>
        )
    }
    
    _renderData = () => {
        const { product } = this.props;
        return product.length ?
            product.map(value => {
                return (
                    <button className="Product col-3" data-toggle="modal" data-target="#ProductDetails"
                    onClick={() => {
                        this.props.getSelectedItem({id:value.ProductID, avatar:value.Avatar, name:value.ProductName, price:value.Price})
                    }}>
                        <h4 className="ProductName">{value.ProductName}</h4>
                        <div><img className="ProductImg" src={value.Avatar}></img></div>
                        <div className="Price">{value.Price}$</div>
                        <span hidden>{value.ProductID}</span>
                    </button>
                )
            })
            : null
    }
}
const mapStateToProps = state => {
    return {
        selectedItem: state.page.selectedItem
    }
}
const mapDispatchToProps = dispatch => ({
    getSelectedItem : (selected) => {
        dispatch({type: "GET_SELECTEDITEM", payload: selected})
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(ProductList)


