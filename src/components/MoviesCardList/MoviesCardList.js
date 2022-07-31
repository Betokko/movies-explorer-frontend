import React, { useState } from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.scss';

const arr = new Array(12).fill(true);

const MoviesCardList = ({name}) => {


  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__items">
        {arr.map((value) => (
          <MoviesCard name={name} />
        ))}
      </ul>
      <input type="submit" value="Ещё" className="movies-card-list__button" />
    </section>
  );
};

export default MoviesCardList;
