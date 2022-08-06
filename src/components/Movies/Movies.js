import {useState} from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import SearchForm from '../SearchForm/SearchForm';

import './Movies.scss';

const Movies = ({
  cards,
  setSearchQuery,
  setIsShort,
  isLoading,
  fetchCards,
  limit,
  setLimit
}) => {
  const [wasRequest, setWasRequest] = useState(false);
  return (
    <main>
      <SearchForm
        setSearchQuery={setSearchQuery}
        setIsShort={setIsShort}
        fetchCards={fetchCards}
        limit={limit}
        setLimit={setLimit}
        setWasRequest={setWasRequest}
      />
      {/* {wasARequest && !cards.length ? <div style={{textAlign: 'center'}}>Ничего не найдено</div> : null} */}
      {isLoading 
       ? <Preloader /> 
       : <MoviesCardList name="Сохранить" cards={cards} limit={limit} setLimit={setLimit}/>
       }
       {cards.length === 0 && wasRequest ? <div style={{textAlign: 'center'}}>Ничего не найдено</div> : null}
    </main>
  );
};

export default Movies;
