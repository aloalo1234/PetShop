import React, { Component } from 'react'
import { connect } from 'react-redux'
import cartStorage from './../../storage/cartStorage.js'
class Quantity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedItem: props.selectedItem,
        }
    }
    render() {
        return (
            <div className="input-group inputQuantity">
                <span className="input-group-btn">
                    <button className="btn btn-light" onClick={this._handleClickTru} > -</button>
                </span>
                <input value={this.props.value} onChange={this._handleInputChange}
                    type="text" className="form-control">
                </input>
                <span class="input-group-btn">
                    <button className="btn btn-light" onClick={this._handleClickCong}>+</button>
                </span>
            </div>
        )
    }
    static getDerivedStateFromProps = (nextProp, prevState) => {
        if (nextProp.selectedItem.id !== prevState.selectedItem.id) {
            const carts = cartStorage._get();
            const cart = carts.find(v => v.id === nextProp.selectedItem.id)
            if (cart) {
                // nextProp.onChange(this.props.value)
                return {
                    selectedItem: nextProp.selectedItem
                }
            } else {
                nextProp.onChange(1)
                return {
                    selectedItem: nextProp.selectedItem
                }
            }
        }
        return null;
    }
    _handleInputChange = (e) => {
        this.props.onChange(+e.target.value)
    }
    _handleClickCong = () => {
        this.props.onChange(this.props.value + 1)
    }
    _handleClickTru = () => {
        (this.props.value > 0) &&
            this.props.onChange(this.props.value - 1)
    }
}
const mapStateToProps = state => {
    return {
        selectedItem: state.page.selectedItem,
    }
}
export default connect(mapStateToProps)(Quantity) 