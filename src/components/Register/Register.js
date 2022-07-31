import React from 'react';
import { Link } from 'react-router-dom';

import './Register.scss';

const Register = () => {
  return (
    <section className="register">
      <div className="register__container">
        <Link to="/" className="header__logo register__logo" />
        <form action="">
          <input type="text" />
          <input type="email" name="" id="" />
          <input type="password" name="" id="" />
          <input type="submit" value="ssss" />
        </form>
        <div>
          <Link to="/">ss</Link>
          <Link to="/">dfdfgd</Link>
        </div>

      </div>
    </section>
  );
};

export default Register;
