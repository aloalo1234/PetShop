import React, { Component } from 'react'
import { AppService } from './../Services/app.service'
import { connect } from 'react-redux'
import ProductList from './Body/ProductList'
import ComponentHeader from './Header/ComponentHeader'
class SearchPage extends Component {
    render() {
        return (
            <React.Fragment>
                <ComponentHeader/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="filter col-4"></div>
                        <div className="content col-8">
                            <ProductList product={this.props.product} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    componentDidMount = () => {
        const { id } = this.props
        id.map(val => {
            this.props._searchData(val.name, this.props.keyword)
        })
        // console.log(this.props.product)
    }
}
const mapStatetoProps = state => {
    return {
        product: state.page.product,
        keyword: state.page.keyword,
        id: state.home.id
    }
}
const mapDispatchToProps = dispatch => ({
    _searchData: (id, keyword) => {
        AppService._search(id, keyword).then(data => {
            console.log(data)
            dispatch({ type: "FETCH_PRODUCT", payload: data })
        })
    }
})
export default connect(mapStatetoProps, mapDispatchToProps)(SearchPage)