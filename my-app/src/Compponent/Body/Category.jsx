import React, { Component } from 'react'
import { connect } from "react-redux"
class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: props.selected || 'NCC'
        }
    }
    render() {
        const { selected } = this.state
        return (
            <select className="form-control custom-select custom-select-xs" value={selected} onChange={this._handleSelect} name="selected">
                {this._categorySelected()}
            </select>
        )
    }

    _handleSelect = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            this.props.getSelected(this.state.selected)
        })
    }
    _categorySelected = () => {
        const { selected } = this.state;
        return this.props.category.map(val => {
            if (val.key === selected)
                return (
                    <option value={val.key} selected>{val.name}</option>
                )
            return (
                <option value={val.key}>{val.name}</option>
            )
        })
    }
}
const mapStateToProps = state => {
    return {
        category: state.home.category
    }
}
export default connect(mapStateToProps)(Category)