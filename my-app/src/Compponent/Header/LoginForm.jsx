import React, { Component } from 'react';
import { Redirect,Link } from 'react-router-dom'
import userStorage from '../../storage/userStorage';
class LoginForm extends Component {
    state = {
        username: "",
        password: "",
        noti: ""
    }
    render() {
        return (
            <div className="modal" id="myModal"
                data-backdrop="static"
                data-keyboard="false"
                tabindex="-1"
                aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Đăng nhập</h4>
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
                            <button type="button" className="btn btn-info" data-dismiss="modal" onClick={this._tmp}>Đăng nhập</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    _handleInputChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name] : value, noti: ""})
    }
    _tmp = () => {
        this.props.history.push('/manager')
    }
    _handleSubmit = (e) => {
        e.preventDefault();
        const {username, password} = this.state
        console.log(username, password)
        const users = userStorage._get()
        users.forEach(val => {
            if(username.trim() === val.username && password.trim() === val.password){
                this.props.history.push('/manager')
            }
            else {
                this.setState({noti: "Tên đăng nhập hoặc mật khẩu không đúng !"})
            }
        })
        
    }
}

export default LoginForm;