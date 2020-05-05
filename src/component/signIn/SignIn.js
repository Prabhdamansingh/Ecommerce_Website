import React from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custombutton/CustomButton';
import './SignIn.scss';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: ' ', password: '' });
        } catch (error) {
            console.error(error.message);
        }
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2> I already have an account </h2>
                <span>Sign in with your email and password</span>

                <form
                    onSubmit={(e) => {
                        this.handleSubmit(e);
                    }}
                >
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        required
                        handleChange={(e) => {
                            this.handleChange(e);
                        }}
                        label="email"
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        required
                        handleChange={(e) => {
                            this.handleChange(e);
                        }}
                        label="password"
                    />
                    <div className="buttons">
                        <CustomButton type="submit"> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
