import React, { useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const SavedMovies = ({ cards, removeCard, setSearchQuery, setIsShort, limit, setLimit,setWasRequest, saveCard, getSavedCards }) => {
  useEffect(() => {
    getSavedCards()
  }, [])
  return (
    <main>
      <SearchForm
        setSearchQuery={setSearchQuery}
        setIsShort={setIsShort}
        setWasRequest={setWasRequest}
      />
      <MoviesCardList
        limit={limit}
        setLimit={setLimit}
        saveCard={saveCard}
        name="&#10006;"
        cards={cards}
        removeCard={removeCard}
      ></MoviesCardList>
    </main>
  );
};

export default SavedMovies;

