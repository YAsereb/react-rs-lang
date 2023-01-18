import { AxiosError } from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import UserService from '../../API/UserService';
import { AuthContext } from '../../context/context';
import './style.scss';

interface LoginProps {
  visible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Authentication = ({ visible, setVisible }: LoginProps) => {

  const [email, setEmail] = useState('');
  const [emailType, setEmailType] = useState('email');
  const [emailPlaceHolder, setEmailPlaceHolder] = useState('');

  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const [passwordPlaceHolder, setPasswordPlaceHolder] = useState('');

  const [formButtonText, setFormButtonText] = useState('SIGN UP');
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  let isPasswordValidate = false;

  const { setIsLogin } = useContext(AuthContext);

  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const submitButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setErrorMessage('');
  }, [email, password])

  const toggleAuth = () => {
    formButtonText === 'SIGN UP' ? setFormButtonText('LOG IN') : setFormButtonText('SIGN UP');
    setIsAuth(!isAuth);
  }

  const passwordValidate = () => {

    if (password.length < 8) {
      isPasswordValidate = false;
      setPassword('');
      setPasswordType('text');
      setPasswordPlaceHolder('Password is too short - should be 8 chars minimum!');
      passwordInput.current?.classList.add('auth-error__input');
    }
    isPasswordValidate = true;
  }

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();

    passwordValidate();

    if (formButtonText === 'SIGN UP' && isPasswordValidate) {

      const responseUser = await UserService.createUsers({ email, password });

      if (responseUser instanceof AxiosError) {
        if (responseUser.response?.status === 422) {
          emailInput.current?.classList.add('auth-error__input');
          setEmailType('text');
          setEmail('');
          setEmailPlaceHolder('Email is invalid');
        }
        if (responseUser.response?.status === 417) {
          setErrorMessage('User with this email exists');
        }
      } else {
        setVisible(false);
        setIsLogin(true);
      }


    } else if (formButtonText === 'LOG IN' && isPasswordValidate) {

      const responseSignIn = await UserService.signIn(email, password);

      if (responseSignIn instanceof AxiosError) {
        if (responseSignIn.response?.status === 404) {
          setErrorMessage(`Couldn't find a(an) user with this email`);
        }
        if (responseSignIn.response?.status === 403) {
          setErrorMessage(`Incorrect email or password`);
        }
      } else {
        setVisible(false);
        setIsLogin(true);
      }
    }
  }

  return (
    <div className='authentication'>
      <h3 id='authentication-title'>
        {formButtonText}
      </h3>
      <p className={errorMessage ? 'auth-error__title' : 'offscreen'}>{errorMessage}</p>
      <form
        className='authentication-form'
        onSubmit={handleForm}
      >
        <label htmlFor='email'>Email:</label>
        <input
          id='email'
          type={emailType}
          value={email}
          placeholder={emailPlaceHolder}
          onChange={(e) => {
            setEmail(e.target.value);
          }
          }
          required
          ref={emailInput}
        />
        <label htmlFor='password'>Password:</label>
        <input
          id='password'
          type={passwordType}
          value={password}
          onChange={(e) => {
            setPasswordType('password');
            setPassword(e.target.value);
          }}
          placeholder={passwordPlaceHolder}
          required
          ref={passwordInput}
        />
        <button
          id='authentication-btn'
          ref={submitButton}
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

export default Authentication