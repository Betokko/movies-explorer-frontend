import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import validator from 'validator';

import './Register.scss';

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="register">
      <div className="register__container">
        <Link to="/" className="header__logo register__logo" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="register__title">Добро пожаловать!</h2>

          <label className="text-field__label" htmlFor="name">
            Имя
            <input
              {...register('name', {
                required: 'Введите имя',
                minLength: {
                  value: 2,
                  message: 'Имя должно содержать не менее 2 символов',
                },
              })}
              className={`text-field__input ${errors.name ? 'text-field__input-error' : ''}`}
              type="text"
              id="name"
            />
            {errors.name && (
              <div className="text-field__error">{errors.name.message}</div>
            )}
          </label>

          <label className="text-field__label" htmlFor="email">
            Email
            <input
              {...register('email', {
                required: 'Введите email',
                validate: {
                  checkEmail: (v) =>
                    validator.isEmail(v) || 'Укажите корректный email',
                },
              })}
              className={`text-field__input ${errors.email ? 'text-field__input-error' : ''}`}
              type="email"
              id="email"
            />
            {errors.email && (
              <div className="text-field__error">{errors.email.message}</div>
            )}
          </label>
          <label className="text-field__label" htmlFor="password">
            Пароль
            <input
              {...register('password', {
                required: 'Введите пароль',
                minLength: {
                  value: 2,
                  message: 'Пароль должен содержать не менее 2 символов',
                },
              })}
              className={`text-field__input ${errors.password ? 'text-field__input-error' : ''}`}
              type="password"
              id="password"
            />
            {errors.password && (
              <div className="text-field__error">{errors.password.message}</div>
            )}
          </label>

          <button
            className="text-field__submit"
            type="submit"
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
        </form>
        <div className="register__bottom">
          <div>Уже зарегистрированы?</div>
          <Link className="register__bottom__link" to="/signin">
            Войти
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
