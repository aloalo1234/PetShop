import React, { Component } from 'react';

class LoginForm extends Component {
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
                                <span>Username: </span><input className="form-control" type="text" placeholder="Tên đăng nhập..."></input>
                            </div>
                            <div>
                                <span>Password: </span><input className="form-control" type="text" placeholder="Mật khẩu..."></input>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-info" data-dismiss="modal">Đăng nhập</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;