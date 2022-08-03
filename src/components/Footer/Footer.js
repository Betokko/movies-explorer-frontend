import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__main">
        <p className="footer__copy">© 2022</p>
        <a href="https://practicum.yandex.ru/" className="footer__link" target='blanc'>
          Яндекс.Практикум
        </a>
        <a href="https://github.com/Betokko" className="footer__link" target='blanc'>
          Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
