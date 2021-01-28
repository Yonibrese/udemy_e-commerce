import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = evt => {
        evt.preventDefault();

        this.setState({email: '', password: ''})
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

                <CustomButton  type='submit'>Sign In</CustomButton>
            </form>
            </div>
        )
    }
}

export default SignIn;