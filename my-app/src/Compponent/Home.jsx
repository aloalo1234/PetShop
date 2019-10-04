import React, { Component } from 'react'
import Slide from './Body/Slide'
import ProductList from './Body/ProductList'
import { AppService } from './../Services/app.service'
import { connect } from 'react-redux'
import LoginForm from './Header/LoginForm'
import ComponentHeader from './Header/ComponentHeader'
class Home extends Component {
    render() {
        // console.log(this.props.product)
        return (
            <div>
                <ComponentHeader/>
                <div className="container-fluid body">
                    <Slide />
                    <ProductList product={this.props.product} />
                    <LoginForm history={this.props.history}/>
                </div>
            </div>
        )
    }
    // fetch tất cả sản phẩm lên trang Home
    componentDidMount = () => {
        const { id } = this.props;
        id.forEach(val => {
            this.props.fetchData(val.name);
        });
    }

}
const mapStateToProps = state => {
    return {
        product: state.home.product,
        id: state.home.id
    }
}

const mapDispatchToProps = dispatch => ({
    fetchData: (id) => {
        AppService._get(id).then(data => {
            dispatch({ type: "FETCH_DATA", payload: data })
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);