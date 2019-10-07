import React from 'react';
import './App.css';
import Home from './Compponent/Home'
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './common/store'
import ProductPage from './Compponent/ProductPage'
import ProductModal from './Compponent/Body/ProductModal';
import CartPage from './Compponent/CartPage'
import SearchPage from './Compponent/SearchPage.jsx'
import ManagePage from "./Compponent/ManagePage.jsx"
import LoginForm from "./Compponent/Header/LoginForm"
function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <IndexRoute to/> */}
        <Route exact path="/home" component={Home} />
        <Route path="/catalog/:key" component={ProductPage} />
        <Route path="/cart" component={CartPage}/>
        <Route path="/search" component={SearchPage}/>
        <Route path="/manager" component={ManagePage}/>
        {/* <Redirect exact from = "/" to = "/home"/> */}
        <ProductModal/>
        <Route path="/login" component={LoginForm}/>
      </Router>
    </Provider>
  );
}

export default App;
