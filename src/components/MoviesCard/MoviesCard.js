import { useState } from 'react';

import './MoviesCard.scss';

const MoviesCard = ({
  name,
  card,
  saveCard,
  removeCard,
  isMoviePage
}) => {
  const hours = Math.trunc(card.duration / 60);
  const minutes = card.duration % 60;
  const [isLike, setIsLike] = useState(false);

  const handleSaveClick = () => {
    setIsLike(!isLike);
    saveCard(card);
  };
  const handleRemoveClick = () => {
    setIsLike(!isLike);
    removeCard(card)
  };

  return (
    <li className="movie-card">
      {console.log(isMoviePage)}
      {!isLike 
      ? <button 
        className="movie-card__save" 
        onClick={ window.location.pathname === '/movies' ? handleSaveClick : handleRemoveClick} 
        > {name} </button> 
      : null}
      {isLike ? <button className="movie-card__checked" onClick={handleRemoveClick}></button> : null}
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
