import React, { Component } from 'react'
import hinh from './../../Image/Product/vong-co-cho-1.png'
export default class AddProduct extends Component {
    state = {
        isOpenAdd: false,
        inputItemName: "",
        selected: 1,
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
                                <img className="col-sm-3 thumbnail" src={this.state.imgPreview} ></img>
                                <input className="col-sm-3" type="file" onChange={this._handleImageChange}/>
                                <input className="col-sm-4" value={this.state.inputItemName}
                                    name="inputItemName" onChange={this._handleInputChange} placeholder="Tên sản phẩm" />
                                <input className="col-sm-2" value={this.state.inputItemName}
                                    name="inputItemName" onChange={this._handleInputChange} placeholder="Giá tiền" />
                            </div>
                            <div className="btn-group col-sm-6">
                                <div className="col-sm-5">Loại sản phẩm: </div>
                                <select className="custom-select custom-select-sm col-sm-5" name="selected" onChange={this._handleInputChange}>
                                    <option value="PKC">Phụ kiện cho chó</option>
                                    <option value="PKM">Phụ kiện cho mèo</option>
                                    <option value="TAC">Thức ăn cho chó</option>
                                    <option value="TAM">Thức ăn cho mèo</option>
                                    <option value="NCC">Nhà cho chó</option>
                                    <option value="NCM">Nhà cho mèo</option>
                                </select>
                            </div>
                            <button className="btn btn-info col-sm-2" onClick={this._handleSubmit}>Submit</button>
                            <button className="btn btn-light col-sm-2" onClick={this._handleCancel}>Cancel</button>
                            <span id="spWarning">{this.state.warning}</span>
                        </div>
                    </React.Fragment>
                }
            </div>
        )
    }
    // onChange={this._handleImageChange}
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
        console.log(this.state.file)
        console.log(this.state.imgPreview)
        reader.readAsDataURL(file)
      }
    _showToggle = () => {
        this.setState({ isOpenAdd: !this.state.isOpenAdd })
        this.setState({ disabled: "disabled" })
    }
    _handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            const { inputItemName } = this.state;
            // Chuỗi không rỗng thì ẩn warning text
            if (inputItemName.trim() !== "")
                this.setState({ warning: "" })
        })

    }
    _handleSubmit = () => {
        const { inputItemName, selected } = this.state;
        let inputName = inputItemName.trim()
        if (inputName === "")
            this.setState({ warning: "Không để trống item name" })
        // else {
        //     this.setState({ warning: "" })
        //     this.props.loadingData();
        //     ToDoService._post({ name: inputName, level: selected }).then(() => {
        //         this.props.fetchData();
        //     })
        // }
    }
    _handleCancel = () => {
        this.setState({ isOpenAdd: false })
        this.setState({ warning: "" })
        this.setState({ inputItemName: "" })
        this.setState({ disabled: "" })
    }
}
