import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

import './Header.scss';

const Header = () => {
  return (
    <section className="header">
      <Link to="/" className="header__link" />
      <Navigation />
      <Link to="/" className="header__button">Аккаунт</Link>
    </section>
  );
};

export default Header;
