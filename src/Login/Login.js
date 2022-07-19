import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = ({handleLogin, validateLogin}) => {
  return (
    <div >
    <form className='login'>
      <div className='logoBox' data-aos='fade-up' data-aos-duration='3000'>
        <h1>PUMP UP</h1>
        <h4>Reach your body goals and get Pumped Up</h4>
      </div>

      <div
        className='loginBox'
        data-aos='fade-left'
        data-aos-anchor='#example-anchor'
        data-aos-offset='500'
        data-aos-duration='500'
      >
        <input
          onChange={(e) => handleLogin(e)}
          placeholder='username'
          name='username'
        />
        <input
          onChange={(e) => handleLogin(e)}
          placeholder='Password'
          name='password'
        />

        <Link to='/main'>
          <button className='loginBtn' onClick={(e) => validateLogin(e)}>
            Log In
          </button>
        </Link>

        <Link to='/sign-up'>
          <button className='newAccountBtn'>Sign Up</button>
        </Link>
      </div>
    </form>
    </div>
  );
};

export default Login;
