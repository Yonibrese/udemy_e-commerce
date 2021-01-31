import React from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButtom from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confPass: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName, email, password, confPass} = this.state;
        if(password !== confPass){
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{ displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confPass: ''
            });
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = (evt) => {
        const {name, value} = evt.target;
        this.setState({[name]:value});
    }


    render(){
        const {displayName, email, password, confPass} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not hava an account</h2>
                <span>sign up with e-mail and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                    />
                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='E-mail'
                    required
                    />
                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                    />
                    <FormInput
                    type='password'
                    name='confPass'
                    value={confPass}
                    onChange={this.handleChange}
                    label='confirm password'
                    required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}


export default SignUp;