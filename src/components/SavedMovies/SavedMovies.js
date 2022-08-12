import { useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./../Movies/Movies.scss";

const SavedMovies = ({
  filteredCards,
  filter,
  setFilter,
  isLoading,
  getCards,
  getSavedCards,
  limit,
  setLimit,
  saveCard,
  removeCard,
  savedCards,
}) => {
  const [wasRequest, setWasRequest] = useState(false);
  const isMoviePage = window.location.pathname === "/movies";

  return (
    <main>
      <SearchForm
        filter={filter}
        setFilter={setFilter}
        getCards={getCards}
        getSavedCards={getSavedCards}
        limit={limit}
        setLimit={setLimit}
        setWasRequest={setWasRequest}
        isMoviePage={isMoviePage}
      />
      {isLoading 
        ? <Preloader />
        : <MoviesCardList
          name="&#9587;"
          filteredCards={filteredCards}
          limit={limit}
          setLimit={setLimit}
          saveCard={saveCard}
          removeCard={removeCard}
          isMoviePage={isMoviePage}
        />
      }
      {filteredCards.length === 0 && wasRequest 
        ? <div style={{ textAlign: "center" }}>Ничего не найдено</div>
        : null
      }
    </main>
  );
};

export default SavedMovies;
