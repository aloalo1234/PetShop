import React, { Component } from 'react'
import { connect } from "react-redux"
import Category from './Category'
class EditProduct extends Component {
    state = {
        selected: this.props.productValue.CategoryID,
        productName: this.props.productValue.ProductName,
        productPrice: this.props.productValue.Price
    }
    render() {
        const { selected, productName, productPrice } = this.state
        const { productValue } = this.props
        return (
            <div className="container row">
                <img className="col-sm-3 thumbnail" src={this.props.productValue.Avatar} />
                <div className="col-sm-3"><input className="form-control" type="text" value={productName} name="productName" onChange={this._handleInputChange}></input></div>
                <div className="col-sm-2"><input className="form-control" type="text" value={productPrice} name="productPrice" onChange={this._handleInputChange}></input></div>
                <div className="col-sm-2">
                    <Category selected={productValue.CategoryID} getSelected={this._getSelected} />
                </div>
                <button className="btn btn-light col-sm-1" onClick={() => { this.props.onCancel(productValue.ProductID) }}>Cancel</button>
                <button className="btn btn-success col-sm-1"
                    onClick={() => {
                        this.props.onSave(
                            selected , productValue.ProductID, { ProductName: productName,  Price: productPrice }
                        )
                    }}
                    >Save</button>
            </div>
        )
    }

    _getSelected = (selected) => {
        this.setState({ selected: selected })
    }
    _handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
}
const mapStateToProps = state => {
    return {
        category: state.home.category
    }
}
export default connect(mapStateToProps)(EditProduct)