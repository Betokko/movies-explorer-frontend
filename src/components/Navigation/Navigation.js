import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

const Navigation = () => {
  return (
    <div className="nav">
      <NavLink to="/" className="nav__link">
        Фильмы
      </NavLink>
      <NavLink to="/" className="nav__link">
        Сохранённые&nbsp;фильмы
      </NavLink>
    </div>
  );
};

export default Navigation;
