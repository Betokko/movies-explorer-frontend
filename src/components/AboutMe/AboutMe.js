import React from 'react';
import { Link } from 'react-router-dom';

import photo from '../../images/photo.jpg';
import './AboutMe.scss';

const AboutMe = () => {
  return (
    <section className="about-me" id="portfolio">
      <p className="about-me__main">Студент</p>
      <div className="about-me__block">
        <div className="about-me__info">
          <h2 className="about-me__info__title">Артур</h2>
          <p className="about-me__info__about">Фронтенд-разработчик, 32 года</p>
          <p className="about-me__info__descr">
            Мне нравится сфера web-разработки и я хочу в ней раздваиваться.
            Приятно сразу видеть результат своей работы. <br /> Я прикладываю
            значительные усилия, чтобы освоить это ремесло, я прохожу курсы,
            смотрю видео, читаю статьи и книги, занимаюсь разработкой своих
            pet-проектов Имею успешный опыт командной работы. <br /> В свободное
            время увленксюь, просмотром фильмов и сериалов, люблю готовку, игры
            и прогулки на свежем воздухе
          </p>
          <ul className="about-me__info__links">
            <li className="about-me__info__link">
              <Link className="about-me__info__link" to="https://www.linkedin.com/in/artur-nikitin-b884a3113/">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link className="about-me__info__link" to="https://github.com/Betokko">
                Github
              </Link>
            </li>
          </ul>
        </div>
        <img className="about-me__photo" alt="фотография" src={photo} />
      </div>
    </section>
  );
};

export default AboutMe;
