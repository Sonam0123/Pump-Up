import React from "react";
import './signUp.css'
import {Link} from 'react-router-dom'

const SignUp = (props) => {
    return(
        <div className="signUpBox">
            <div className="header">
            </div>
         <div className="signupMain">
            <div className="name">  
                <input onChange={(e) => props.handleSignUp(e)} className="nameInput" placeholder="Name" name="name" />
            </div>
                <input onChange={(e) => props.handleSignUp(e)} placeholder="username" name="username" />
                <input onChange={(e) => props.handleSignUp(e)} placeholder="Password" name="password" />
                
            </div>
            <Link to="/">
            <button onClick={() => props.createUser()} className="submitBtn">Submit</button>
            </Link>

        </div>
    )
}

export default SignUp