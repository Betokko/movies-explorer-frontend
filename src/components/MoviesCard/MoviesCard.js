import { useEffect, useState } from 'react';

import './MoviesCard.scss';

const MoviesCard = ({
  name,
  card,
  saveCard,
  removeCard,
  isMoviePage,
  likedMovies,
  
}) => {
  const hours = Math.trunc(card.duration / 60);
  const minutes = card.duration % 60;

  const handleSaveClick = () => {
    saveCard(card);
  };
  const handleRemoveClick = () => {
    removeCard(card)
  };

  return (
    <li className="movie-card">
      {isMoviePage 
      ? likedMovies.includes(card.nameEN) 
        ? <button className="movie-card__checked" style={{cursor:"default"}}></button> 
        : <button className="movie-card__save" onClick={handleSaveClick} > {name} </button> 
      : <button className="movie-card__save" onClick={handleRemoveClick} > {name} </button>
      }
      <div className="movie-card__main">
        <img
          className="movie-card__main__img"
          src={window.location.pathname === '/movies' ? `https://api.nomoreparties.co/${card.image.url}` : card.image}
          alt={card.nameRU}
        />
      </div>
      <div className="movie-card__about">
        <a
          href={card.trailerLink}
          target="blanc"
          className="movie-card__about__name"
        >
          {card.nameRU}
        </a>
        <div className="movie-card__about__duration">
          {hours ? hours + 'ч' : ''}&nbsp;{minutes ? minutes + 'м' : ''}
        </div>
      </div>
    </li>
  );
};

export default MoviesCard;
