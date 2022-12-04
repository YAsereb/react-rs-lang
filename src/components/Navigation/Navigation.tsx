import { NavLink } from 'react-router-dom';
import svg from '../../assets/svg/header.svg';
import './Navigation.scss';


const Navigation = () => {

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
      </div>
    </nav >
  )
}

export default Navigation
