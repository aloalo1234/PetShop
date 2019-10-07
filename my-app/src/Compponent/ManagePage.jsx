import React, { Component } from 'react'
import { connect } from "react-redux"
import { AppService } from './../Services/app.service'
import AddProduct from './Button/AddProduct'
class ManagePage extends Component {
    render() {
        return (
            <div className="managePage container">
                <h1>MANAGEMENT</h1>
                <AddProduct/>
                {this._renderProduct()}
            </div>
        )
    }
    componentDidMount = () => {
        const { id } = this.props;
        id.forEach(val => {
            this.props.fetchProduct(val.name);
        });
    }
    _renderProduct = () => {
        const { productManagement } = this.props
        console.log(productManagement)
        return productManagement.map(val => {
            return (
                <div className="list row">
                    <div className="col-sm-4"><img className="avatar" src={val.Avatar}></img></div>
                    <ul className="col-sm-6">
                        <li><h3>{val.ProductName}</h3></li>
                        <li>{val.Price}$</li>
                        <li hidden>{val.CategoryID}</li>
                    </ul>
                    <div className="col-sm-2">
                        <button className="btn btn-danger" onClick={() => {
                            console.log(val.CategoryID, val.ProductID)
                            this.props.deleteProduct(val.CategoryID, val.ProductID)
                        }}>Xóa</button>
                        <button className="btn btn-success">Sửa</button>
                    </div>
                </div>
            )
        })
    }
}
const mapStateToProps = state => {
    return {
        productManagement: state.page.productManagement,
        id: state.home.id
    }
}
const mapDispatchToProp = dispatch => ({
    fetchProduct: (id) => {
        AppService._get(id).then(data => {
            dispatch({ type: "MANAGEMENT", payload: data })
        })
    },
    deleteProduct: (categoryID, id) => {
        AppService._delete(categoryID, id).then(data => {
            dispatch({ type: "DELETE", payload: data })
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProp)(ManagePage)