import { useRef } from 'react';

import { useForm } from 'react-hook-form';

import './SearchForm.scss';

const SearchForm = ({ setSearchQuery, setIsShort }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    reset();
    setSearchQuery(data.search);
  };

  const checkbox = useRef()

  return (
    <section className="search-form">
      <form
        className="search-form__container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Фильм"
          className="search-form__container__field"
          {...register('search', { required: 'Нужно ввести ключевое слово' })}
        />
        <button
          type="submit"
          value=""
          className="search-form__container__button"
        />
        <div className="search-form__container__error">
          {errors.search && errors.search.message}
        </div>
      </form>
      <div className="search-form__shorts">
        <span className="search-form__shorts__title">Короткометражки</span>
        <label htmlFor="shorts" className="search-form__shorts__checkbox">
          <input type="checkbox" id="shorts" ref={checkbox} onClick={() => setIsShort(checkbox.current.checked)} />
          <span className="search-form__shorts__checkbox__bg"></span>
          <i className="search-form__shorts__checkbox__indicator"></i>
        </label>
      </div>
    </section>
  );
};

export default SearchForm;
