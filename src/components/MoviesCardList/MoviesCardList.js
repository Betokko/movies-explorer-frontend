import React, { useState } from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.scss';


const MoviesCardList = ({name, arr}) => {


  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__items">
        {arr.map((item, index) => (
          <MoviesCard name={name} key={index}/>
        ))}
      </ul>
      <input type="submit" value="Ещё" className="movies-card-list__button" />
    </section>
  );
};

export default MoviesCardList;
