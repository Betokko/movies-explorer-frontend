import React from 'react';

import './AboutProject.scss';

const AboutProject = () => {
  return (
    <section className="about-project">
      <div className="about-project__title">О проекте</div>
      <div className="about-project__section">
        <div className="about-project__section__title">
          Дипломный проект включал 5 этапов
        </div>
        <p className="about-project__section__descr">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
      </div>
      <div className="about-project__section">
        <div className="about-project__section__title">
          На выполнение диплома ушло 5 недель
        </div>
        <p className="about-project__section__descr">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="about-project__timeline">
        <div className="about-project__timeline__back">
          <div className="about-project__timeline__back__week">1 неделя</div>
        </div>
        <div className="about-project__timeline__front">
          <div className="about-project__timeline__front__week">4 недели</div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
