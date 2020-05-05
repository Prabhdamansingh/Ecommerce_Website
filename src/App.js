import React, { Fragment, Component } from 'react';
import './App.css';
import Homepage from './component/homepage/Homepage';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './component/shop/Shop';
import Header from './component/header/Header';
import Form from './component/forms/Form';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

class App extends Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser, currentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapShot) => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    });
                });
            }

            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        const { currentUser } = this.props;
        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={Homepage}></Route>
                    <Route exact path="/shop" component={ShopPage}></Route>
                    <Route
                        exact
                        path="/form"
                        render={() =>
                            currentUser ? <Redirect to="/" /> : <Form />
                        }
                    ></Route>
                </Switch>
            </Fragment>
        );
    }
}

const mapDispatchToProps = {
    setCurrentUser,
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
