import React from 'react';
import Menu from './Menu';
import brand from './../../Image/brand-final.png';
import './../../Style/Header.css'
import SearchForm from './SearchForm';
import LoginForm from './LoginForm'
import Login from './Login';
import {Link} from 'react-router-dom'
import ShoppingCart from './ShoppingCart';
export default class ComponentHeader extends React.Component{
    render(){
        return(
            <div className="container-fluid header">
                <nav className="navbar navbar-expand-sm navbar-default navbar-fixed-top menu">                
                    <div className="navbar-header">
                        <Link to="/home" className="navbar-brand"><img src={brand}></img></Link>
                    </div>
                    <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" name="collapsibleNavbar">
                        <span className="glyphicon glyphicon-list"></span>
                    </button>
                    <Menu/>
                    <SearchForm/>
                    <ul className="nav navbar-nav navbar-right btn-flex">
                        <Login/>
                        <ShoppingCart/>
                    </ul> 
                </nav>
                <LoginForm />
            </div>
        )
    }
}