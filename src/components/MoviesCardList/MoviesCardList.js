import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.scss';


const MoviesCardList = ({name, cards, limit, setLimit }) => {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__items">
        {cards.slice(0, limit).map((card) => (
           <MoviesCard name={name} card={card} key={card.id}/>
        ))}
      </ul>
      { cards.length >= limit ? <input type="submit" value="Ещё" className="movies-card-list__button" onClick={() => setLimit(limit + 9)}/>: null}
    </section>
  );
};

export default MoviesCardList;
