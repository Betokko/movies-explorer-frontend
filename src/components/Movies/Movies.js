import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import SearchForm from '../SearchForm/SearchForm';

import './Movies.scss';
const arr = new Array(12).fill(true);

const Movies = () => {
  return (
    <>
      <SearchForm />
      <Preloader />
      <MoviesCardList name="Сохранить" arr={arr} />
    </>
  );
};

export default Movies;
