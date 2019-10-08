import React, { Component } from 'react'

export default class ManageItem extends Component {
    render() {
        const {productValue,renderCategory, onEdit, onDelete} = this.props
        return (
            <div className="list row">
                <div className="col-sm-4"><img className="avatar" src={productValue.Avatar}></img></div>
                <ul className="col-sm-6">
                    <li><h3>{productValue.ProductName}</h3></li>
                    <li>{productValue.Price}$</li>
                    <li><h5>{renderCategory(productValue.CategoryID)}</h5></li>
                </ul>
                <div className="col-sm-2">
                    <button className="btn btn-danger"
                     onClick={() => {onDelete(productValue.CategoryID, productValue.ProductID)}}>Xóa</button>
                    <button className="btn btn-success" onClick={() => {onEdit(productValue.ProductID)}} >Sửa</button>
                </div>
            </div>
        )
    }
    // onClick={() => {
    //     this.props.deleteProduct(productValue.CategoryID, productValue.ProductID)
    // }}
    // _renderCategory = (categoryID) => {
    //     const {category } = this.props
    //     let tmp = category.find(val => val.key === categoryID)
    //      return tmp.name
    // }
}

