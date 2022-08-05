import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import SearchForm from '../SearchForm/SearchForm';

import './Movies.scss';

const Movies = ({
  cards,
  setSearchQuery,
  setIsShort,
  wasARequest,
  setWasARequest,
  isLoading,
  setIsLoading
}) => {
  return (
    <main>
      <SearchForm
        setSearchQuery={setSearchQuery}
        setIsShort={setIsShort}
        setWasARequest={setWasARequest}
        setIsLoading={setIsLoading}
      />
      {wasARequest && !cards.length ? <div style={{textAlign: 'center'}}>Ничего не найдено</div> : null}
      {isLoading 
       ? <Preloader /> 
       : <MoviesCardList name="Сохранить" cards={cards} />
       }
    </main>
  );
};

export default Movies;
