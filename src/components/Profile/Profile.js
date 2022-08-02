import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Profile.scss";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@gmail.com",
  });

  return (
    <section className="profile">
      <div className="profile__container">
        <div className="profile__items">
          <h2 className="profile__title">Привет, {user.name}!</h2>
          <label className="profile__items__label" htmlFor="name">
            {" "}
            <span>Имя</span>
            <input
              className="profile__items__input"
              id="name"
              value={user.name}
              onChange={(evt) => setUser({ ...user, name: evt.target.value })}
            />
          </label>
          <label className="profile__items__label" htmlFor="email">
            {" "}
            <span>E-&nbsp;mail</span>
            <input
              className="profile__items__input"
              id="email"
              value={user.email}
              onChange={(evt) => setUser({ ...user, email: evt.target.value })}
            />
          </label>
        </div>
        <div className="profile__links">
          <Link className="profile__link profile__link-edit" to="/">
            Редактировать
          </Link>
          <Link className="profile__link profile__link-logout" to="/">
            Выйти из аккаунта
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Profile;
