import React, { useState } from 'react';
import svg from '../../assets/svg/header.svg';
import './style.scss';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const [isEmailValidate, setIsEmailValidate] = useState(false);
  const [isPasswordValidate, setIsPasswordValidate] = useState(false);

  const auth = true;

  const passwordValidate = () => {
    if (password.length < 8) {
      setPassword('Password is too short - should be 8 chars minimum!');
    }
  }

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();

  }

  return (

    <div className='authentication-block'>
      <button className='close-btn'>
        <svg>
          <use href={`${svg}#delete`}></use>
        </svg>
      </button>
      <h3 id='authentication-title'>
        {auth ? 'LOG IN' : 'SIGN UP'}
      </h3>
      <form
        className='authentication-form'
        onSubmit={handleAuth}
      >
        <label htmlFor='username'>Username:</label>
        <input
          id='username'
          type='text'
          value={user}
          placeholder='Username'
          onChange={(e) => setUser(e.target.value)}
          required
        />

        <label htmlFor='password'>Password:</label>
        <input
          id='password'
          type='password'
          value={password}
          placeholder='******'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          id='authentication-btn'
        >
          {auth ? 'LOG IN' : 'SIGN UP'}
        </button>
      </form>
      <div className='authentication-text'>
        <p id='authentication-text'>{
          auth
            ? 'Dont have an account?'
            : 'Already have an account?'
        }</p>
        <span id='change-authentication'>
          {auth ? 'Sign up' : 'Log in'}</span>
      </div>
    </div>

  )
}

export default Login