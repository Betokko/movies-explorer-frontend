import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__main">
        <p className="footer__copy">© 2022</p>
        <Link to='/' className='footer__link'>Яндекс.Практикум</Link>
        <Link to='/' className='footer__link'>Github</Link>
        <Link to='/' className='footer__link'>Facebook</Link>
      </div>
    </div>
  );
};

export default Footer;
