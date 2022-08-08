import React, { useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const SavedMovies = ({ filteredSavedCards, filter, setFilter, getSavedCards, limit, setLimit, saveCard, removeCard }) => {
  useEffect(() => {
    getSavedCards()
  }, [])
  return (
    <main>
      <SearchForm
        filter={filter}
        setFilter={setFilter}
      />
      <MoviesCardList
        filteredSavedCards={filteredSavedCards}
        name="&#10006;"
        limit={limit}
        setLimit={setLimit}
        saveCard={saveCard}
        removeCard={removeCard}
      ></MoviesCardList>
    </main>
  );
};

export default SavedMovies;

