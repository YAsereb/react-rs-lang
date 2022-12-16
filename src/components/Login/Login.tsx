import React, { useRef, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../API/SingIn';
import UserService from '../../API/UserService';
import svg from '../../assets/svg/wordCard.svg';
import { AuthContext } from '../../context/context';
import './style.scss';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  const { isLogin, setIsLogin } = useContext(AuthContext)

  const authButton = useRef(null);

  const toggleAuth = () => {
    setIsAuth(!isAuth);
  }

  const passwordValidate = () => {
    if (password.length < 8) {
      setPassword('Password is too short - should be 8 chars minimum!');
    }
  }

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();
    let buttonValue = (authButton.current as unknown as HTMLButtonElement).textContent;
    if (buttonValue === 'SIGN UP') {
      passwordValidate()
      signIn(email, password)
    } else {
      UserService.createUsers({ email, password });
    }
    setIsAuth(true)
  }

  return (
    <div className='authentication-wrapper'>
      <div className='authentication-block'>
        <div className='close-btn'
        // onClick={() => navigate(-1)}
        >
          <svg>
            <use href={`${svg}#delete`}></use>
          </svg>
        </div>
        <h3 id='authentication-title'>
          {isAuth ? 'LOG IN' : 'SIGN UP'}
        </h3>
        <form
          className='authentication-form'
          onSubmit={handleForm}
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
          <button ref={authButton}
            id='authentication-btn'
          >
            {isAuth ? 'LOG IN' : 'SIGN UP'}
          </button>
        </form>
        <div className='authentication-text'>
          <p id='authentication-text'>{
            isAuth
              ? 'Dont have an account?'
              : 'Already have an account?'
          }</p>
          <span id='change-authentication' onClick={toggleAuth}>
            {isAuth ? 'Sign up' : 'Log in'}
          </span>
        </div>
      </div>
    </div>


  )
}

export default Login