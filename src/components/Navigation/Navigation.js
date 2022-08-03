import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

const Navigation = ({onClickHandler}) => {
  return (
    <div className="nav">
      <NavLink to="/movies" className="nav__link" onClick={onClickHandler}>
        Фильмы
      </NavLink>
      <NavLink to="/saved-movies" className="nav__link" onClick={onClickHandler}>
        Сохранённые&nbsp;фильмы
      </NavLink>
    </div>
  );
};

export default Navigation;
