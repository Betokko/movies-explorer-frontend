import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.scss';

const SavedMovies = () => {
  return (
    <div className="saved-movies">
      <MoviesCardList name="&#10006;"></MoviesCardList>
    </div>
  );
};

export default SavedMovies;
