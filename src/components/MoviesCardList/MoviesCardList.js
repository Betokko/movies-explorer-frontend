import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.scss';


const MoviesCardList = ({name, cards, limit, setLimit, saveCard, removeCard }) => {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__items">
      {window.location.pathname === '/movies' 
        ? cards.slice(0, limit).map((card) => <MoviesCard name={name} card={card} key={card.id} saveCard={saveCard} />)
        : cards.map((card) => <MoviesCard name={name} card={card} key={card._id} removeCard={removeCard}/>)
      }
      </ul>
      {window.location.pathname === '/movies'
        ? cards.length > limit ? <input type="submit" value="Ещё" className="movies-card-list__button" onClick={() => setLimit(limit + 9)}/>: null
        : null
      }
    </section>
  );
};

export default MoviesCardList;
