import React from 'react';
import { Link } from 'react-router-dom';

import heroLogo from '../../images/hero-logo.svg';

import './Promo.scss';

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__info">
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <p className='promo__descr'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a href="#portfolio" className='promo__link'>Узнать больше</a>
      </div>
      <img src={heroLogo} className="promo__logo" alt="Лого" />
    </section>
  );
};

export default Promo;
