import './styles/login.css'
import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export function Login() {

    const [ user, setUser ] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const auth  = getAuth();
    
    
    const userLogin = () => {
        if( user.email === '' || user.password === '' )
        {
            alert( 'Email or Password is empty' );
        }
        else
        {
            signInWithEmailAndPassword( auth , user.email , user.password )
            .then( signedinuser => {
                const currentUser = signedinuser.user;
                    navigate('/Home');
            })
            .catch( error => {
               alert("No User With Those Credentials");
            })
        }
    }

    return(
       <div className='page'>
        <div className='main-login-card'>
            <h1>Sign In</h1>
            <div>
                <h2 className='email-head'>Email</h2>
                <input
                  className='email-input'
                  type="text"
                  name='email'
                  value={ user.email }
                  label='Email'
                  onChange={ text => setUser( { email: text.target.value , password: user.password } ) }
                >
                </input>
            </div>

            <div>
                <h2 className='password-head'>Password</h2>
                <input
                className='password-input'
                type="password"
                name='password'
                value={ user.password }
                label='Password'
                security='true'
                onChange={ text => setUser( { email: user.email , password: text.target.value } ) }
                >
                </input>
            </div>
            <div>
                <button className='login-btn' onClick={ userLogin }>Login</button>
            </div>
            <div>
                <Link to="/Signup">Don't have an account? Sign Up here</Link>
            </div>
        </div>
      </div>
    );
}