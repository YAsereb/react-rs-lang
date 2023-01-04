import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import svg from '../../assets/svg/header.svg';
import { AuthContext } from '../../context/context';
import Login from '../Login/Login';
import MyModal from '../UI/modal/MyModal';
import './Navigation.scss';


const Navigation = () => {
  const [modal, setModal] = useState(false);
  const { isLogin, setIsLogin } = useContext(AuthContext);

  return (
    <nav className='navigation'>
      <div className='navigation-item'>
        <NavLink to='/' className='home-button'>
          <svg>
            <use href={`${svg}#home`}></use>
          </svg>
        </NavLink>
      </div>
      <div className='navigation-item'>
        <NavLink to='/textbook'>
          Textbook
        </NavLink>

        <div className='navigation-games'>
          <div className='games-item'>
            <span>Games</span>
            <svg>
              <use href={`${svg}#arrow`}></use>
            </svg>
          </div>
          <div className='games-list'>
            <NavLink className='game-link' to='/audio-game'>Audio call</NavLink>
            <NavLink to='/sprint-game' className='game-link'>Sprint</NavLink>
          </div>
        </div>

        <NavLink to='/statistic'>
          Statistic
        </NavLink>

        {isLogin
          ? <div className='navigation-auth'
            onClick={() => setIsLogin(false)}
          >
            LOGOUT
          </div>
          :
          <>
            <MyModal visible={modal} setVisible={setModal}>
              <Login visible={modal} setVisible={setModal} />
            </MyModal><div className='navigation-auth'
              onClick={() => setModal(true)}
            >
              LOGIN
            </div>
          </>
        }


      </div>
    </nav >
  )
}

export default Navigation
