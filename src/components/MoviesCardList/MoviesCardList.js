import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.scss';


const MoviesCardList = ({name, cards}) => {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__items">
        {cards.map((card) => (
          <MoviesCard name={name} card={card} key={card.id}/>
        ))}
      </ul>
      <input type="submit" value="Ещё" className="movies-card-list__button" />
    </section>
  );
};

export default MoviesCardList;
