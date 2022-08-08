import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import './SearchForm.scss';

const SearchForm = ({ filter, setFilter,  fetchCards,  setLimit, setWasRequest, isMoviePage }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    reset();
    setFilter({...filter, query: data.search});
    if (window.location.pathname === '/movies') {
      fetchCards() 
      setLimit(9)
      setWasRequest(true)
      setRequest(data.search)
    }
  };
  const [request, setRequest] = useState('')
  const checkbox = useRef()
 


  return (
    <section className="search-form">
      <form className="search-form__container" onSubmit={handleSubmit(onSubmit)} >
        <input
          type="text"
          placeholder={request ? 'Результаты поиска: '+request : 'Фильм'}
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
          <input type="checkbox" id="shorts" ref={checkbox} onChange={() => setFilter({...filter, short: checkbox.current.checked})}/>
          <span className="search-form__shorts__checkbox__bg"></span>
          <i className="search-form__shorts__checkbox__indicator"></i>
        </label>
      </div>
    </section>
  );
};

export default SearchForm;
