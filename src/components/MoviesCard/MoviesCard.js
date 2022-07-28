import React from 'react';

import './MoviesCard.scss'

const MoviesCard = () => {
  return (
    <div className='movie-card'>
      <div>
        <div className="movie-card__save">Сохранить</div>
        <div className="movie-checked">Ok</div>
        <img className='movie-card__img' src="https://via.placeholder.com/360x200" alt="" />
      </div>
      <div>
        <p>33 слова о дизайне</p>
        <div>1ч 30м</div>
      </div>
    </div>
  );
};

export default MoviesCard;
