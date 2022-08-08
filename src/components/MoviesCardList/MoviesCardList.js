import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.scss";

const MoviesCardList = ({
  name,
  filteredCards,
  limit,
  setLimit,
  saveCard,
  removeCard,
  isMoviePage,
}) => {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__items">
        {isMoviePage
          ? filteredCards
              .slice(0, limit)
              .map((card) => (
                <MoviesCard
                  name={name}
                  card={card}
                  key={card.id}
                  saveCard={saveCard}
                  removeCard={removeCard}
                  isMoviePage={isMoviePage}
                />
              ))
          : filteredCards.map((card) => (
              <MoviesCard
                name={name}
                card={card}
                key={card._id || card.id}
                removeCard={removeCard}
                isMoviePage={isMoviePage}
              />
            ))}
      </ul>
      {isMoviePage ? (
        filteredCards.length > limit ? (
          <input
            type="submit"
            value="Ещё"
            className="movies-card-list__button"
            onClick={() => setLimit(limit + 9)}
          />
        ) : null
      ) : null}
    </section>
  );
};

export default MoviesCardList;
