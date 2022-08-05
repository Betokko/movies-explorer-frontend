import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import SearchForm from '../SearchForm/SearchForm';

import './Movies.scss';

const Movies = ({
  cards,
  searchQuery,
  setSearchQuery,
  isShort,
  setIsShort,
}) => {
  return (
    <main>
      <SearchForm
        cards={cards}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isShort={isShort}
        setIsShort={setIsShort}
      />
      <Preloader />
      <MoviesCardList name="Сохранить" cards={cards} />
    </main>
  );
};

export default Movies;
