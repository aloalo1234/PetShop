import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class Dropdown extends React.Component {
    
    render() {
        const { menuName } = this.props;
        return (
            <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown"
                    href="catalog">{menuName[this.props.type]}<span className="caret"></span></a>
                <ul className="dropdown-menu">
                    {this._renderItem()}
                </ul>
            </li>
        )
    }
    _renderItem = () => {
        const { type, menuItem } = this.props;
        return menuItem[type].map(val => {
            return (
                <li className="dropdown-item"><Link to={`/catalog/${val.key}`} onClick={() => {
                    this.props.getName(val.value)
                }} >{val.value}</Link></li>
            )
        })
    }
}
const mapStateToProps = state => {
    return {
        menuItem : state.page.menuItem,
        menuName : state.page.menuName
    }
}
export default connect(mapStateToProps)(Dropdown)