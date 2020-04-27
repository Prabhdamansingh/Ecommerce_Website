import React, { Fragment } from 'react';
import './App.css';
import Homepage from './component/homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './component/shop/Shop';
import Header from './component/header/Header';

function App() {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route exact path="/" component={Homepage}></Route>
                <Route exact path="/shop" component={ShopPage}></Route>
            </Switch>
        </Fragment>
    );
}

export default App;
