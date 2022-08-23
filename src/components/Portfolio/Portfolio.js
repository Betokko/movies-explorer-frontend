import React from 'react';

import './Portfolio.scss'

const Portfolio = () => {
  return (
    <section className="portfolio">
      <p className="portfolio__main">Портфолио</p>
      <ul className="portfolio__links">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://mesto-mern.nomoreparties.sbs/" target='blanc'>
            Одностраничное приложение
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://pomodoro-timer-beige-five.vercel.app/" target='blanc'>
          Pomodoro таймер
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://posts-list-app.vercel.app/" target='blanc'>
            Список постов
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://employees-8d04bddkr-betokko.vercel.app/" target='blanc'>
            Список работников
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://academy-kappa.vercel.app/" target='blanc'>
            Верстка - academy
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://wip-ten.vercel.app/" target='blanc'>
            Верстка - wip
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://how-to-learn-two.vercel.app/" target='blanc'>
            Верстка - how to learn
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://betokko.github.io/russian-travel/" target='blanc'>
           Верстка - russian travel
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
