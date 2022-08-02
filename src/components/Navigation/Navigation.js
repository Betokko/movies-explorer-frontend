import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

const Navigation = () => {
  return (
    <div className="nav">
      <NavLink to="/movies" className="nav__link">
        Фильмы
      </NavLink>
      <NavLink to="/saved-movies" className="nav__link">
        Сохранённые&nbsp;фильмы
      </NavLink>
    </div>
  );
};

export default Navigation;
