import { useContext } from "react";
import { Link } from "react-router-dom";
import {CurrentUserContext} from '../../context/CurrenUserContext'

import "./Profile.scss";

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext)

  return (
    <main className="profile">
      <section className="profile__container">
        <div className="profile__items">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <label className="profile__items__label" htmlFor="name">
            {" "}
            <span>Имя</span>
            <input
              className="profile__items__input"
              id="name"
              value={currentUser.name}
              onChange={(evt) => setCurrentUser({ ...currentUser, name: evt.target.value })}
            />
          </label>
          <label className="profile__items__label" htmlFor="email">
            {" "}
            <span>E-&nbsp;mail</span>
            <input
              className="profile__items__input"
              id="email"
              value={currentUser.email}
              onChange={(evt) => setCurrentUser({ ...currentUser, email: evt.target.value })}
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
      </section>
    </main>
  );
};

export default Profile;
