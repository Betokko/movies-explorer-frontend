import React from 'react';
import { Link } from 'react-router-dom';

import photo from '../../images/photo.jpg';
import './AboutMe.scss';

const AboutMe = () => {
  return (
    <section className="about-me">
      <p className="about-me__main">Студент</p>
      <div className="about-me__block">
        <div className="about-me__info">
          <h2 className="about-me__info__title">Артур</h2>
          <p className="about-me__info__about">Фронтенд-разработчик, 32 года</p>
          <p className="about-me__info__descr">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
            minima incidunt facilis perferendis iste reiciendis, molestias
            deleniti nobis maiores. Corporis error aliquid nesciunt nemo unde
            veritatis, natus hic ex voluptates.
          </p>
          <ul className="about-me__info__links">
            <li className="about-me__info__link">
              <Link className="about-me__info__link" to="#">
                Facebook
              </Link>
            </li>
            <li>
              <Link className="about-me__info__link" to="#">
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
