import React from 'react'
import "./login.scss";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

export default function Login() {
  

const handleLogin = () =>{
  // login();
}
  return (
    <div className='login'>
     <div className='card'>
      <div className='left'>
        <h1>Hello world</h1>
        <p>
            Loreum ispum sit ametfdfgdfg
        </p>
        <span>
            Don't you have an account?
        </span>
        <Link to="/register">
        <button>Register</button>
        </Link>
      </div>
      <div className='right'>
        <h1>Login</h1>
        <form>
            <input type="text" placeholder='username' />
            <input type="password" placeholder='password' />
            <button>Login</button>
        </form>

      </div>
     </div>
     </div>
  )
}
