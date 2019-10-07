import React, { Component } from 'react';
import { Redirect,Link } from 'react-router-dom'
class Login extends Component {
    render() {
        return (
            <li>
                <Link to="/login" >
                <button data-toggle="modal" data-target="#myModal" className="btn navbar-btn icon-header">
                    <span className="glyphicon glyphicon-user"></span>
                </button>
                </Link>
            </li>
               
        );
    }
}

export default Login;