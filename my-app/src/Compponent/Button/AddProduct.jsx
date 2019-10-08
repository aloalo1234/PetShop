import React, { Component } from 'react'
import Category from "./../Body/Category"
import { AppService } from '../../Services/app.service'
export default class AddProduct extends Component {
    state = {
        isOpenAdd: false,
        inputItemName: "",
        selected: "NCC",
        inputPrice: "",
        warning: "",
        disabled: "",
        imgPreview: "",
        file: ""
    }
    render() {
        const { isOpenAdd } = this.state
        return (
            <div>
                <button disabled={this.state.disabled} className="btn btn-info col-sm-12 btnAdd" onClick={this._showToggle}>Add Item</button>
                {
                    isOpenAdd &&
                    <React.Fragment>
                        <div className="addForm row">
                            <div className="col-sm-12">
                                <img className="col-sm-4 thumbnail" src={this.state.imgPreview} ></img>
                                <div className="col-sm-8"><input type="file" onChange={this._handleImageChange} /></div>
                                <div className="col-sm-3"><input className="form-control" value={this.state.inputItemName}
                                    name="inputItemName" onChange={this._handleInputChange} placeholder="Tên sản phẩm" /></div>
                                <div className="col-sm-2"><input className="form-control" value={this.state.inputPrice}
                                    name="inputPrice" onChange={this._handleInputChange} placeholder="Giá tiền" /></div>
                                <div className="btn-group col-sm-5">
                                    <div className="col-sm-3">Loại sản phẩm: </div>
                                    <div className="col-sm-5">
                                        <Category getSelected={this._getSelected} />
                                    </div>
                                </div>
                            </div>

                            <button className="btn btn-info col-sm-2 btnAddForm" onClick={this._handleSubmit}>Submit</button>
                            <button className="btn btn-light col-sm-2 btnAddForm" onClick={this._handleCancel}>Cancel</button>
                            <div id="spWarning" class="alert alert-light" role="alert">
                                {this.state.warning}
                            </div>
                        </div>
                    </React.Fragment>
                }
            </div>
        )
    }
    _getSelected = (selected) => {
        this.setState({ selected: selected })
    }
    _handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imgPreview: reader.result
            });
        }
        console.log(this.state.imgPreview)
        reader.readAsDataURL(file)
    }
    _showToggle = () => {
        this.setState({
            isOpenAdd: !this.state.isOpenAdd,
            disabled: "disabled"
        })
    }
    _handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            const { inputItemName, inputPrice } = this.state;
            // Chuỗi không rỗng thì ẩn warning text
            if (inputItemName.trim() || inputPrice.trim())
                this.setState({ warning: "" })
        })

    }
    _handleSubmit = () => {
        const { inputItemName, inputPrice, selected } = this.state;
        let inputName = inputItemName.trim()
        let price = inputPrice.trim()
        if (inputName === "" || price === "")
            this.setState({ warning: "Vui lòng không để trống" })
        else {
            this.setState({ warning: "" })
            AppService._post(selected, { ProductName: inputName, Price: price }).then(() => {
                this.props.onSubmit()
            })
        }
    }
    _handleCancel = () => {
        this.setState({ isOpenAdd: false,warning: "",inputItemName: "",disabled: "", inputPrice: ""})
    }
}
