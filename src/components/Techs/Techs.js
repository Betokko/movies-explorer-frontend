import React from 'react';

import './Techs.scss'

const Techs = () => {
  return (
    <section className="techs">
      <p className="techs__main">Технологии</p>
      <div className="techs__block">
        <h2 className="techs__title">7 технологий</h2>
        <p className="techs__descr">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;
