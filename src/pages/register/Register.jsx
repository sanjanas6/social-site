import React from 'react'
import "./Register.scss";
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className='Register'>
     <div className='card'>
      <div className='left'>
        <h1>Hello world</h1>
        <p>
            Loreum ispum sit ametfdfgdfg
        </p>
        <span>
            Do you have an account?
        </span>
        <Link to="/login">
        <button>Login</button>
        </Link>
      </div>
      <div className='right'>
        <h1>Register</h1>
        <form>
            <input type="text" placeholder='name' />
            <input type="text" placeholder='username' />
            <input type="password" placeholder='password' />
            <input type="text" placeholder='email' />
            <button>Register</button>
        </form>

      </div>
     </div>
     </div>
  )
}
