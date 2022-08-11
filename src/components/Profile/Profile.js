import { useContext, useState } from "react";
import { useForm } from 'react-hook-form';
import validator from 'validator';

import { CurrentUserContext } from '../../hoc/CurrentUserContext'

import "./Profile.scss";

const Profile = ({logOut, editProfile}) => {
  const {currentUser} = useContext(CurrentUserContext)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    editProfile(data)
    reset();
  };

  const watchName = watch("name", currentUser.name);
  const watchEmail = watch("email", currentUser.email);

  return (
    <main className="profile">
      <form className="profile__container" onSubmit={handleSubmit(onSubmit)}>
        <div className="profile__items">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <label className="profile__items__label" htmlFor="name">
            
            <span>Имя</span>
            <input
              {...register('name', { 
                required: 'Введите имя',
                minLength: {
                  value: 2,
                  message: 'Имя должно содержать не менее 2 символов',
                },
                validate: v => v.toLowerCase() !== currentUser.name.toLowerCase()
              })}
              value={watchName}
              className="profile__items__input"
              id="name"
              placeholder={currentUser.name}
            />
          </label>
          <label className="profile__items__label" htmlFor="email">
            <span>Email</span>
            <input
              {...register('email', {
                required: 'Введите email',
                validate: {
                  checkEmail: (v) => validator.isEmail(v) || 'Укажите корректный email',
                  ceckMatch: (v) => v.toLowerCase() !== currentUser.email.toLowerCase(),
                },
              })}
              value={watchEmail}
              className="profile__items__input"
              id="email"
              placeholder={currentUser.email}
            />
          </label>
          {errors.email && <div className="profile__items__error">{errors.email.message}</div>}
        </div>
        <div className="profile__buttons">
          <button className="profile__button profile__button-edit" disabled={!isValid}>
            Редактировать
          </button>
          <button className="profile__button profile__button-logout" onClick={() => logOut()} >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </main>
  );
};

export default Profile;
