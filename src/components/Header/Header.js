import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { CurrentUserContext } from '../../hoc/CurrentUserContext';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab'

import './Header.scss';

const Header = ({}) => {
  const {isLoggedIn} = useContext(CurrentUserContext)
  const [burgerIsActive, setBurgerIsActive] = useState(false);
  const closeBurgerMenu = () => setBurgerIsActive(false)

  return (
    <section className={`header ${burgerIsActive ? 'header-active' : ''}`}>
      {burgerIsActive ? <div className={'header__overlay'} /> : null}
      <NavLink to="/" className="header__logo" />
      <div className={`header__menu ${ burgerIsActive ? '' : 'header__menu-active' }`} >
        <div className='header__menu__items'>
          {isLoggedIn 
            ? <Navigation onClickHandler={() => closeBurgerMenu()}/>
            : <NavTab/>
          }
        </div>
        <div className="header__burger" onClick={() => setBurgerIsActive(!burgerIsActive)}>
          <span />
        </div>

      </div>
    </section>
  );
};

export default Header;
