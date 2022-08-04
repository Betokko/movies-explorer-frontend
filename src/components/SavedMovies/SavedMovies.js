import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = ({cards}) => {
  return (
    <main>
      <SearchForm />
      <MoviesCardList name="&#10006;" cards={cards}></MoviesCardList>
    </main>
  );
};

export default SavedMovies;
