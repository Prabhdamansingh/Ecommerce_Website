import React, { Fragment } from 'react';
import SignIn from '../signIn/SignIn';
import SignUp from '../signUp/SignUp';
import './Form.scss';

const Form = () => {
    return (
        <div className="sign-in-and-sign-up">
            <Fragment>
                <SignIn />
                <SignUp />
            </Fragment>
        </div>
    );
};

export default Form;
