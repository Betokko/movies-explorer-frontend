import React from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";

import "./Register.scss";

const Register = () => {
  return (
    <section className="register">
      <div className="register__container">
        <Link to="/" className="header__logo register__logo" />
        <form>
          <h2 className="register__title">Добро пожаловать!</h2>
          <Input type="text" name="name" placeholder="Имя" />
          <Input type="email" name="email" placeholder="Почта" />
          <Input type="password" name="password" placeholder="Пароль" />
          <input
            type="submit"
            value="Зарегистрироваться"
            className="register__submit"
          />
        </form>
        <div className="register__bottom">
          <div>Уже зарегистрированы?</div>
          <Link className="register__bottom__link" Link to="/">Войти</Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
