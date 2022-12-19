import { AxiosError } from 'axios';
import React, { useContext, useState } from 'react';
import UserService from '../../API/UserService';
import { AuthContext } from '../../context/context';
import './style.scss';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValidate, setIsPasswordValidate] = useState(false);
  const [passwordType, setPasswordType] = useState('password');
  const [passwordPlaceHolder, setPasswordPlaceHolder] = useState('');
  const [formButtonText, setFormButtonText] = useState('SIGN UP')
  const [isAuth, setIsAuth] = useState(false);

  const { isLogin, setIsLogin } = useContext(AuthContext);

  const emailInput = React.useRef<HTMLInputElement>(null);
  const passwordInput = React.useRef<HTMLInputElement>(null);

  const toggleAuth = () => {
    formButtonText === 'SIGN UP' ? setFormButtonText('LOG IN') : setFormButtonText('SIGN UP');
    setIsAuth(!isAuth);
  }

  const passwordValidate = () => {
    if (password.length < 8) {
      setIsPasswordValidate(false);
      setPassword('');
      setPasswordPlaceHolder('Password is too short - should be 8 chars minimum!')
      setPasswordType('text');
      passwordInput.current?.classList.add('auth-error__input');
    }
    setIsPasswordValidate(true);
  }

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();

    passwordValidate();

    if (formButtonText === 'SIGN UP' && isPasswordValidate) {

      const responseUser = await UserService.createUsers({ email, password });

      console.log(responseUser);

      if (responseUser instanceof AxiosError) {
        console.log(responseUser);
      }
      setIsAuth(true);
      console.log('login');

    } else if (formButtonText === 'LOGIN' && isPasswordValidate) {

      let responseSignIn = await UserService.signIn(email, password);
      console.log(responseSignIn);
      setIsAuth(true);
      console.log('sign in');

    }

    console.log('first')
  }

  return (
    <div className='authentication'>
      <h3 id='authentication-title'>
        {formButtonText}
      </h3>
      <form
        className='authentication-form'
        onSubmit={handleForm}
      >
        <label htmlFor='username'>Email:
          <input
            id='username'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            ref={emailInput}
          />
        </label>

        <label htmlFor='password'>Password:
          <input
            id='password'
            type={passwordType}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordType('password');
            }}
            placeholder={passwordPlaceHolder}
            required
            ref={passwordInput}
          />
        </label>

        <button
          type='submit'
          id='authentication-btn'
        >
          {formButtonText}
        </button>
      </form>
      <div className='authentication-text'>
        <p id='authentication-text'>{
          isAuth
            ? 'Dont have an account?'
            : 'Already have an account?'
        }</p>
        <span id='change-authentication' onClick={() => toggleAuth()}>
          {isAuth ? 'Sign up' : 'Log in'}
        </span>
      </div>
    </div>
  )
}

export default Login