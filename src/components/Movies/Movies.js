import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import SearchForm from '../SearchForm/SearchForm';

import './Movies.scss';
const arr = new Array(12).fill(true);

const Movies = () => {
  return (
    <main>
      <SearchForm />
      <Preloader />
      <MoviesCardList name="Сохранить" arr={arr} />
    </main>
  );
};

export default Movies;
