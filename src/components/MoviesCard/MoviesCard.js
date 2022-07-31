import React from 'react';

import './MoviesCard.scss'

const MoviesCard = () => {
  return (
    <li className='movie-card'>
      <div className='movie-card__main'>
        <div className="movie-card__main__save">Сохранить</div>
        <div className="movie-card__main__checked"></div>
        <img className='movie-card__main__img' src="https://via.placeholder.com/360x200" alt="" />
      </div>
      <div className='movie-card__about'>
        <p className='movie-card__about__name'>33 слова о дизайне</p>
        <div className='movie-card__about__duration'>1ч 30м</div>
      </div>
    </li>
  );
};

export default MoviesCard;
