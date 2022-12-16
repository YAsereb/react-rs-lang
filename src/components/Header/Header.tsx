import { useState } from 'react'
import { AuthContext } from '../../context/context';
import Navigation from '../Navigation/Navigation';
import './header.scss';


const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      <header className='header'>
        <Navigation />
      </header >
    </AuthContext.Provider>

  )
}

export default Header
