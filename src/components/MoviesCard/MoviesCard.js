import {useState} from 'react';

import './MoviesCard.scss';

const MoviesCard = ({ name, card }) => {
  const hours = Math.trunc(card.duration / 60);
  const minutes = card.duration % 60;
  const [isLike, setIsLike] = useState(false)

  return (
    <li className="movie-card">
      { !isLike ? <button className="movie-card__save" onClick={() => setIsLike(!isLike)}>{name}</button> : null}
      { isLike ? <button className="movie-card__checked" onClick={() => setIsLike(!isLike)}></button> : null}
      <div className="movie-card__main">
        <img
          className="movie-card__main__img"
          src={`https://api.nomoreparties.co/${card.image.url}`}
          alt={card.nameRU}
        />
      </div>
      <div className="movie-card__about">
        <a href={card.trailerLink} target='blanc' className="movie-card__about__name">{card.nameRU}</a>
        <div className="movie-card__about__duration">
          {hours ? hours + 'ч' : ''}&nbsp;{minutes ? minutes + 'м' : ''}
        </div>
      </div>
    </li>
  );
};

export default MoviesCard;
