import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import brand from "./../../Image/brand-final.png"
import userStorage from '../../storage/userStorage';
class LoginForm extends Component {
    state = {
        username: "",
        password: "",
        noti: "",
    }
    render() {
        return (
            // <div className="modal" id="myModal"
            //     data-backdrop="static"
            //     data-keyboard="false"
            //     tabindex="-1"
            //     aria-labelledby="myModalLabel"
            //     aria-hidden="true">
                
            // </div>
            <div className="modal-dialog modal-sm">
            <div className="modal-content">
                <div className="modal-header">
                <Link to="/home" className="navbar-brand"><img src={brand}></img></Link>
                </div>
                <div className="modal-body">
                    <div>
                        <span>Username: </span><input value={this.state.username} name="username"
                            onChange={this._handleInputChange} required
                            className="form-control" type="text" placeholder="Tên đăng nhập..."></input>
                    </div>
                    <div>
                        <span>Password: </span><input value={this.state.password} name="password"
                            onChange={this._handleInputChange} required
                            className="form-control" type="password" placeholder="Mật khẩu..."></input>
                    </div>
                    <div>{this.state.noti}</div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-info" data-dismiss="modal" onClick={this._handleSubmit}>Đăng nhập</button>
                </div>
            </div>
        </div>
        );
    }
    // onClick={this._tmp}
    _handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value, noti: "" })
    }
    _handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state
        console.log(username, password)
        const users = userStorage._get()
        users.forEach(val => {
            if (username.trim() === val.username && password.trim() === val.password) {
                this.props.history.push('/manager')
            }
            else {
                this.setState({ noti: "Tên đăng nhập hoặc mật khẩu không đúng !" })
            }
        })

    }
}

export default LoginForm;