import React, { Component } from 'react'
import { connect } from 'react-redux'
import './../../Style/Body.css'
import cartStorage from './../../storage/cartStorage.js'
import Quantity from './Quantity'
class ProductDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedItem: props.selectedItem,
            quantity: 0
        }
    }
    render() {
        const { selectedItem } = this.props;
        return (
            <div className="col-md-5">
                <Quantity value={this.state.quantity} onChange={(quantity)=>{
                    this.setState({quantity})
                }}/>
                <h3>{selectedItem.price}$</h3>
                <button className="btn btn-info" onClick={()=>this._handleClickAdd(selectedItem)}>
                    <span className="glyphicon glyphicon-shopping-cart"></span>
                    <span> Thêm vào giỏ hàng</span>
                </button>
            </div>
        )
    }
    
    _handleClickAdd = (selectedItem) => {
        const {quantity} = this.state
        const obj = {
            ...selectedItem,
            quantity
        }
        cartStorage._addProduct(obj)
        this.props.setBadge(cartStorage._getLength())
    }
    
}

const mapStateToProps = state => {
    return {
        // quantity: state.home.quantity,
        selectedItem: state.page.selectedItem,
    }
}
const mapDistpatchToProps = dispatch => ({
    setBadge: (quantity) => {
        dispatch({ type: "SET_BADGE", payload: quantity })
    }
})
export default connect(mapStateToProps, mapDistpatchToProps)(ProductDetails)