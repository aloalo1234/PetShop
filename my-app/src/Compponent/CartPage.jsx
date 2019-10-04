import React, { Component } from 'react'
import cartStorage from './../storage/cartStorage'
import { connect } from 'react-redux'
import Quantity from './Body/Quantity'
import ComponentHeader from './Header/ComponentHeader'
class CartPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carts: cartStorage._get(),
            // quantity: value
        }
    }

    render() {
        return (
            <React.Fragment>
                <ComponentHeader />
                <div className="container-fluid cart">
                    {this._renderItem()}
                    {this._tinhTong()}
                </div >
            </React.Fragment>
        )
    }
    _renderItem = () => {
        return this.state.carts.map(val => {
            return (
                <div className="cartList row">
                    <div className="col-sm-3 imgCartItem"><img className="imgCartItem" src={val.avatar}></img></div>
                    <ul className="col-sm-4">
                        <li><h2>{val.name}</h2></li>
                        <li><h4>{val.price}$</h4></li>
                        <Quantity value={val.quantity} onChange={(quantity) => {
                            this._changeQuantity(val.id, quantity)
                        }} />
                        <a className="deleteItem" onClick={() => {
                            cartStorage._delete(val.id)
                            this.setState({ carts: cartStorage._get() })
                            this.props.setBadge(cartStorage._getLength())
                        }}>Xóa</a>
                    </ul>
                    <div className="col-sm-3">
                        <h2>{val.quantity * val.price}$</h2>
                    </div>
                </div>
            )

        })

    }
    _tinhTong = () => {
        const newArr = this.state.carts.map(val => {
            return val.quantity * val.price
        })
        const tong = newArr.reduce((acc, curValue) => {
            return acc + curValue
        }, 0) //0 là giá trị mặc định,
        return (
            <div className="tongTien">
                <h1>Tổng tiền</h1>
                <h2>{tong}$</h2>
            </div>
        )

    }
    _changeQuantity = (id, quantity) => {
        cartStorage._changeQuantity(id, quantity)
        this.props.setBadge(cartStorage._getLength())
        this.setState({ carts: cartStorage._get() })
    }
}
const mapDistpatchToProps = dispatch => ({
    setBadge: (quantity) => {
        dispatch({ type: "SET_BADGE", payload: quantity })
    }
})
export default connect(null, mapDistpatchToProps)(CartPage)