import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = () => {
  const arr = new Array(4).fill(true);

  return (
    <main>
      <SearchForm />
      <MoviesCardList name="&#10006;" arr={arr}></MoviesCardList>
    </main>
  );
};

export default SavedMovies;
