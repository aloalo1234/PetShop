import React, { Component } from 'react';
import Dropdown from './Dropdown'
import {connect} from 'react-redux'
class Menu extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="nav navbar-nav">
                    <Dropdown getName={(name) =>{
                        this.props.setCatalogName(name)}
                    } type="Cho" />
                    <Dropdown getName={(name) =>{
                        this.props.setCatalogName(name)}
                    } type="Meo" />
                    <li><a href="#">Cách chăm sóc</a></li>
                    <li><a href="#">Tin tức</a></li>
                </ul>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCatalogName: (name) => {
        // alert(name)
        dispatch({type:"SET_CATALOG", payload: name })
    }
})
export default connect(null,mapDispatchToProps)(Menu);