import React from 'react';

import { Link } from 'react-router-dom';

import './Portfolio.scss'

const Portfolio = () => {
  return (
    <section className="portfolio">
      <p className="portfolio__main">Портфолио</p>
      <ul className="portfolio__links">
        <li className="portfolio__item">
          <Link className="portfolio__link" to="#">
            Статичный сайт
          </Link>
        </li>
        <li className="portfolio__item">
          <Link className="portfolio__link" to="#">
            Адаптивный сайт
          </Link>
        </li>
        <li className="portfolio__item">
          <Link className="portfolio__link" to="#">
            Одностраничное приложение
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
