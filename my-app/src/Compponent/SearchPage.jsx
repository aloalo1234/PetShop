import React, { Component } from 'react'
import { AppService } from './../Services/app.service'
import { connect } from 'react-redux'
import ProductList from './Body/ProductList'
import ComponentHeader from './Header/ComponentHeader'
class SearchPage extends Component {
    state = {
        keyword: this.props.keyword
    }
    render() {
        return (
            <React.Fragment>
                <ComponentHeader />
                <div className="container-fluid">
                    <div className="row">
                        <div className="filter col-4"></div>
                        <div className="content col-8">
                            <ProductList product={this.props.searchResult} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStatetoProps = state => {
    return {
        searchResult: state.page.searchResult,
    }
}
const mapDispatchToProps = dispatch => ({
    _searchData: (id, keyword) => {
        AppService._search(id, keyword).then(data => {
            console.log(data)
            dispatch({ type: "FETCH_SEARCH", payload: data })
        })
    }
})
export default connect(mapStatetoProps, mapDispatchToProps)(SearchPage)