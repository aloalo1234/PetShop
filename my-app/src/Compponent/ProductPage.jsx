import React, { Component } from 'react'
import { AppService } from './../Services/app.service.js'
import ProductList from "./Body/ProductList";
import { connect } from 'react-redux'
import ComponentHeader from './Header/ComponentHeader.jsx';

class ProductPage extends Component {
    constructor(props) {
        super(props)
        const { key } = props.match.params
        this.state = {
            key: key,
        }
    }
    // nghiên cứu lại 
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.match.params.key !== prevState.key) {
            nextProps.fetchProduct(nextProps.match.params.key)
            return {
                key: nextProps.match.params.key
            }
        }
        return null;
    }
    render() {
        return (
            <React.Fragment>
                <ComponentHeader />
                <div className="ProductPage">
                    <h1 className="CatalogName">{this.props.catalogName}</h1>
                    <ProductList product={this.props.product} />
                </div>
            </React.Fragment>
        )
    }
    componentDidMount = () => {
        const { key } = this.props.match.params
        this.props.fetchProduct(key);
    }
}
const mapStateToProps = state => {
    return {
        product: state.page.product,
        isLoading: state.page.isLoading,
        menuItem: state.page.menuItem,
        menuName: state.page.menuName,
        catalogName: state.page.catalogName
    }
}
const mapDispatchToProps = dispatch => ({
    fetchProduct: (key) => {
        AppService._get(key).then(data => {
            dispatch({ type: "FETCH_PRODUCT", payload: data })
        })
    },
    setCatalogName: (name) => {
        dispatch({ type: "SET_CATALOG", payload: name })
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)