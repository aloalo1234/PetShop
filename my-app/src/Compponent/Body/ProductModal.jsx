import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductDetails from './ProductDetails'
class ProductModal extends Component {
    render() {
        const { selectedItem } = this.props;
        return (
            <div id="ProductDetails" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h2 className="modal-title ProductName">{selectedItem.name}</h2>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-7"><img className="ProductImg" src={selectedItem.avatar}></img></div>
                                <ProductDetails/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        selectedItem: state.page.selectedItem
    }
}

export default connect(mapStateToProps)(ProductModal)