import React from 'react';

import { Link } from 'react-router-dom';

import './Portfolio.scss'

const Portfolio = () => {
  return (
    <section className="portfolio">
      <p className="portfolio__main">Портфолио</p>
      <ul className="portfolio__links">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://how-to-learn-two.vercel.app/" target='blanc'>
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://betokko.github.io/russian-travel/" target='blanc'>
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://mesto-mern.nomoreparties.sbs/" target='blanc'>
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
