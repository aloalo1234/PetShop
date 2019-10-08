import React, { Component } from 'react'
import brand from './../Image/brand-final.png';
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import { AppService } from './../Services/app.service'
import AddProduct from './Button/AddProduct'
import EditProduct from './Body/EditProduct'
import ManageItem from './Body/ManageItem'
class ManagePage extends Component {
    state = {
        idEdit: -1
    }
    render() {
        return (
            <div className="managePage container">
                <Link to="/home" className="navbar-brand"><img src={brand}></img></Link>
                <AddProduct onSubmit={this._fetch} />
                {this._renderProduct()}
            </div>
        )
    }
    _fetch = () => {
        const { id } = this.props;
        id.forEach(val => {
            this.props.fetchProduct(val.name);
        });
    }
    componentDidMount = () => {
        this._fetch()
    }
    _handleEdit = (id) => {
        this.setState({ idEdit: id })
    }
    _renderCategory = (categoryID) => {
        const { category } = this.props
        let tmp = category.find(val => val.key === categoryID)
        return tmp.name
    }
    _editData = (categoryID,id, obj) => {
        AppService._put(categoryID,id, obj).then(() => {
            this._fetch()
            this.setState({ idEdit: -1 })
        })
    }
    _renderProduct = () => {
        const { productManagement } = this.props
        const { idEdit } = this.state
        return productManagement.map(val => {
            return (val.ProductID === idEdit)
                ? <EditProduct productValue={val} onSave={(categoryID,id, obj)=>{this._editData(categoryID,id, obj)}} onCancel={() => this.setState({ idEdit: -1 })} />
                : <ManageItem productValue={val} renderCategory={this._renderCategory}
                    onEdit={this._handleEdit} onDelete={this.props.deleteProduct} />
        })
    }
}
// 
// onClick={this._handleEdit(val.ProductID)}
const mapStateToProps = state => {
    return {
        productManagement: state.page.productManagement,
        id: state.home.id,
        category: state.home.category
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