import React, { useState } from 'react';
import UserService from '../../API/UserService';
import svg from '../../assets/svg/wordCard.svg';
import './style.scss';

const Login = () => {
  const [email, setEmail] = useState('');
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
    console.log(email)
    console.log(password)
    UserService.createUsers({ name: email, password });
  }

  return (
    <div className='authentication-wrapper'>
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
          <label htmlFor='username'>Email:</label>
          <input
            id='username'
            type='email'
            value={email}
            placeholder='Username'
            onChange={(e) => setEmail(e.target.value)}
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
    </div>


  )
}

export default Login