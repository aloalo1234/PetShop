import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import { AppService } from '../../Services/app.service';
import { AppService } from "./../../Services/app.service.js"
class SearchForm extends Component {
    state = {
        searchResult: this.props.searchResult,
        keyword: this.props.keyword
    }
    render() {
        return (
            <div className="input-group searchForm">
                <input value={this.props.keyword} type="text"
                    onChange={this._handleInputChange}
                    className="form-control" placeholder="Nhập tên sản phẩm" />
                <span className="input-group-btn">
                    <Link to="/search">
                        <button className="btn btn-default btn-search" type="button" onClick={this._handleClickSearch}>
                            <span className="glyphicon glyphicon-search" />
                        </button>
                    </Link>
                </span>
            </div>
        );
    }
    _handleClickSearch = () => {
        const { id } = this.props
        id.map(val => {
            this.props._searchData(val.name, this.props.keyword)
        })
    }
    _handleInputChange = (e) => {
        this.props._changeKeyword(e.target.value)
    }
}
const mapStatetoProps = state => {
    return {
        keyword: state.page.keyword,
        id: state.home.id,
        searchResult: state.page.searchResult
    } 
}
const mapDispatchToProps = dispatch => ({
    _changeKeyword: (keyword) => {
        dispatch({type:"CHANGE_KEYWORD", payload: keyword})
    },
    _searchData: (id, keyword) => {
        AppService._search(id, keyword).then(data => {
            console.log(data)
            dispatch({ type: "FETCH_SEARCH", payload: data })
        })
    }
})
export default connect(mapStatetoProps,mapDispatchToProps)(SearchForm);