import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import auth from './firebase/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './styles/login.css'
import './styles/signup.css'

export function SignUp() {
    const [ user, setUser ] = useState({
        email: '',
        password: ''
    })
    const [ reenter , setReenter ] = useState('');
    const auth = getAuth();

    const createUser = () => {
        if( user.username === '' || user.email === '' || user.password === '' ) {
            alert("Username, Email, or Password Empty");
        }
        else if( reenter != user.password ) {
            alert("Password and Re-Enter do not match");
        }
        else {
            //Firebase API cal to register user
            createUserWithEmailAndPassword( auth , user.email , user.password )
            .then( userCredential => {
                navigate("/");
            })
            .catch( error => {
                const errorCode = error.code;
                console.log( error );
                if( errorCode === "auth/email-already-in-use")
                {
                    alert("That Email is already in use");
                }
                else
                {
                    alert("Oops.. Something went wrong");
                }
            })
        }
    }

    const navigate = useNavigate();

    return(
        <div className = "page">
        <div className = 'divPush'></div>
          <div className = "main-login-card">
            <div>
              <h1 className = "titleAlign">Sign Up</h1>
                <h2 className = "email-text">Email</h2>
                <input
                  className = "email-input"
                  type="text"
                  name='email'
                  value={ user.email }
                  label='Email'
                  onChange={ text => setUser( { email: text.target.value , password: user.password } ) }
                >
                </input>
            </div>

            <div>
            <h2 className = "password-text">Password</h2>
            <input
              className = "email-input"
              type="password"
              name='email'
              value={ user.password }
              label='Password'
              onChange={ text => setUser( { email: user.email , password: text.target.value } ) }
            ></input>
            
            <h2 className = "password-text">Re-enter Password</h2>
            <input
              className = "email-input"
              type="password"
              name='reenter'
              value={ reenter }
              label='reenter'
              onChange={ text => setReenter( text.target.value ) }
              ></input>
            </div>

            <div>
                <button className = "login-btn" onClick={ createUser }>Sign Up</button>
            </div>
            <Link to="/">
                Return to login
            </Link>
            </div>
        </div>
    );
}