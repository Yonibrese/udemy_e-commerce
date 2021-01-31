import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async evt => {
        evt.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = evt => {
        const {value, name} = evt.target;
        this.setState({[name]: value })
    }

    render(){
        return(
            <div className="sign-in">
            <h2 className='title'>I Already Have An Account</h2>
            <span>sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    name="email"
                    type="email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label='email'
                    required
                />
                <FormInput
                name='password'
                type="password"
                vale={this.state.password}
                handleChange={this.handleChange}
                label='password'
                required
                />
                <div className="buttons">
                    <CustomButton  type='submit'>Sign In</CustomButton>
                    <CustomButton  onClick={SignInWithGoogle} isGoogleSignIn
                    >sign in with Google</CustomButton>
                </div>
            </form>
            </div>
        )
    }
}

export default SignIn;