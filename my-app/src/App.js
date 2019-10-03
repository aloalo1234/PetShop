import React from 'react';
import './App.css';
import Home from './Compponent/Home'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './common/store'
import ProductPage from './Compponent/ProductPage'
import ComponentHeader from './Compponent/Header/ComponentHeader';
import ProductModal from './Compponent/Body/ProductModal';
import CartPage from './Compponent/CartPage'
import SearchPage from './Compponent/SearchPage.jsx'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <ComponentHeader />
        <Route exact path="/home" component={Home} />
        <Route path="/catalog/:key" component={ProductPage} />
        <Route path="/cart" component={CartPage}/>
        <Route path="/search" component={SearchPage}/>
        <Redirect exact from = "/" to = "/home"/>
        <ProductModal/>
      </Router>
    </Provider>
  );
}

export default App;
