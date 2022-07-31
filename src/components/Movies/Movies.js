import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import SearchForm from '../SearchForm/SearchForm';

import './Movies.scss';

const Movies = () => {
  return (
    <>
      <SearchForm />
      <Preloader />
      <MoviesCardList name="Сохранить" />
    </>
  );
};

export default Movies;
