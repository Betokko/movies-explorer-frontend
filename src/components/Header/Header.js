import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

import './Header.scss';

const Header = () => {
  const [burgerIsActive, setBurgerIsActive] = useState(false);

  return (
    <section className={`header ${burgerIsActive ? 'header-active' : ''}`}>
      <Link to="/" className="header__logo" />
      <div className={`header__menu ${ burgerIsActive ? '' : 'header__menu-active' }`} >
        <div className='header__menu__items'>
          <Navigation />
          <Link to="/" className="header__menu__items__account_button">Аккаунт</Link>
        </div>

        <div className="header__burger" onClick={() => setBurgerIsActive(!burgerIsActive)}>
          <span />
        </div>

      </div>
    </section>
  );
};

export default Header;
