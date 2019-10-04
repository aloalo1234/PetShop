import React, { Component } from 'react';
import { Redirect,Link } from 'react-router-dom'
class Login extends Component {
    render() {
        return (
            <li>
                <a>
                <button data-toggle="modal" data-target="#myModal" className="btn navbar-btn icon-header">
                    <span className="glyphicon glyphicon-user"></span>
                </button>
                </a>
            </li>
               
        );
    }
}

export default Login;