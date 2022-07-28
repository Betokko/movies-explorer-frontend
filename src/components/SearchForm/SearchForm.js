import React from 'react';

import './SearchForm.scss';

const SearchForm = () => {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <input
          type="text"
          placeholder="Фильм"
          className="search-form__container__field"
        />
        <input
          type="submit"
          value=""
          className="search-form__container__button"
        />
      </div>
      <div className="search-form__shorts">
        <span className="search-form__shorts__title">Короткометражки</span>
        <label htmlFor="shorts" className="search-form__shorts__checkbox">
          <input type="checkbox" id="shorts" />
          <span className='search-form__shorts__checkbox__bg'></span>
          <i className='search-form__shorts__checkbox__indicator'></i>
        </label>
      </div>
    </section>
  );
};

export default SearchForm;
