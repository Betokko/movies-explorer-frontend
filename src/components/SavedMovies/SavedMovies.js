import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.scss';

const SavedMovies = () => {
  const arr = new Array(4).fill(true);

  return (
    <div className="saved-movies">
      <MoviesCardList name="&#10006;" arr={arr}></MoviesCardList>
    </div>
  );
};

export default SavedMovies;
