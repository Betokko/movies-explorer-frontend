import React from "react";
import { Link } from "react-router-dom";

import "./PageNotFound.scss";

const PageNotFound = () => {
  return (
    <div className="not-found">
      <div>
        <h2 className="not-found__title">404</h2>
        <p className="not-found__descr">Страница не найдена</p>
      </div>
      <Link className="not-found__link" to="/">
        Назад
      </Link>
    </div>
  );
};

export default PageNotFound;
