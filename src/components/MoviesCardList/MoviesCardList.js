import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.scss'

let arr = new Array(12).fill(true);

const MoviesCardList = () => {
  return (
    <section className='movies-card-list'>
      <ul className='movies-card-list__items'>
        {arr.map((item) => (
            <MoviesCard />
        ))}
      </ul>
      <input type="submit" value="Ещё" className='movies-card-list__button'/>
    </section>
  );
};

export default MoviesCardList;
