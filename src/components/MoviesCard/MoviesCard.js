import React from 'react';

import './MoviesCard.scss';

const MoviesCard = ({ name }) => {
  return (
    <li className="movie-card">
      <div className="movie-card__save">{name}</div>
      {/* <div className="movie-card__checked"></div> */}
      <div className="movie-card__main">
        <img
          className="movie-card__main__img"
          src="https://via.placeholder.com/360x200"
          alt="Карточка"
        />
      </div>
      <div className="movie-card__about">
        <p className="movie-card__about__name">33 слова о дизайне</p>
        <div className="movie-card__about__duration">1ч 30м</div>
      </div>
    </li>
  );
};

export default MoviesCard;
