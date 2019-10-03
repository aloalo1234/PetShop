import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class SearchForm extends Component {
    render() {
        return (
            <div className="input-group searchForm">
                <input value={this.props.keyword} type="text"
                    onChange={this._handleInputChange}
                    className="form-control" placeholder="Nhập tên sản phẩm" />
                <span className="input-group-btn">
                    <Link to="/search">
                        <button className="btn btn-default btn-search" type="button">
                            <span className="glyphicon glyphicon-search" />
                        </button>
                    </Link>
                </span>
            </div>
        );
    }
    _handleInputChange = (e) => {
        this.props._changeKeyword(e.target.value)
    }
}
const mapStatetoProps = state => {
    return {keyword: state.page.keyword} 
}
const mapDispatchToProps = dispatch => ({
    _changeKeyword: (keyword) => {
        dispatch({type:"CHANGE_KEYWORD", payload: keyword})
    }
})
export default connect(mapStatetoProps,mapDispatchToProps)(SearchForm);