import React from 'react';
import { Link } from 'react-router-dom';

import heroLogo from '../../images/hero-logo.svg';

import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="main__info">
        <h1 className='main__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <p className='main__descr'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <Link to="/" className='main__link'>Узнать больше</Link>
      </div>
      <img src={heroLogo} className="main__logo" alt="Лого" />
    </div>
  );
};

export default Main;
