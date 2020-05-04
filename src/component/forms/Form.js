import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SignIn from '../signIn/SignIn';
import SignUp from '../signUp/SignUp';
import './Form.scss';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

const Form = ({ user: { currentUser } }) => {
    return (
        <div className="sign-in-and-sign-up">
            {currentUser ? (
                <Redirect to="/" />
            ) : (
                <Fragment>
                    <SignIn />
                    <SignUp />
                </Fragment>
            )}
        </div>
    );
};

Form.propTypes = {};

const mapStateToProps = (state) => ({
    user: state.user,
});

export default connect(mapStateToProps)(Form);
