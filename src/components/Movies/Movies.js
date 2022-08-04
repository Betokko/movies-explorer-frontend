import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import SearchForm from '../SearchForm/SearchForm';

import './Movies.scss';

const Movies = ({cards}) => {
  return (
    <main>
      <SearchForm />
      <Preloader />
      <MoviesCardList name="Сохранить" cards={cards} />
    </main>
  );
};

export default Movies;
