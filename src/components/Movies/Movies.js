import { useState, useEffect } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.scss";

const Movies = ({
  filteredCards,
  filter,
  setFilter,
  isLoading,
  getCards,
  limit,
  setLimit,
  saveCard,
  removeCard,
}) => {
  const [wasRequest, setWasRequest] = useState(false);
  const isMoviePage = window.location.pathname === "/movies";

  return (
    <main>
      <SearchForm
        filter={filter}
        setFilter={setFilter}
        getCards={getCards}
        limit={limit}
        setLimit={setLimit}
        setWasRequest={setWasRequest}
        isMoviePage={isMoviePage}
      />
      {isLoading 
        ? <Preloader />
        : <MoviesCardList
          name="Сохранить"
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

export default Movies;
