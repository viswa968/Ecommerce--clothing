import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.components';

import './sign-in.styles.scss'



class SignIn extends React.Component {
    constructor(props) {
        super(props);
    

         this.state={
            email:'',
            password:''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '' , password:''})
    }
    handleChange= event => {
        const{value,name} = event.target;
        this.setState({ [name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
               <h2>I already have an account</h2>
               <span>Sign in with your email and password</span>

               <form onSubmit={this.handleSubmit}>
                   <FormInput 
                   name ='email'
                    type='email'
                    handleChange={this.handleChange}
                    value ={this.state.email}
                    label="email"
                    required 
                    />
                   
                   <FormInput
                    name ='passowrd'
                     type='password'
                    handleChange={this.handleChange}
                    value ={this.state.password}
                    required 
                        label="password"
                    />
                   <div className='buttons'>
                   <CustomButton type= 'submit' >
                     Sign in
                   </CustomButton>
                   <CustomButton onClick= {signInWithGoogle} isGoogleSignIn>
                     {' '}
                     Sign In with Google{' '}
                   </CustomButton>
                   </div>
                   
               </form>
            </div>
        )
    }
}

export default SignIn;