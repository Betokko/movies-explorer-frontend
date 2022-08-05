import { useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Layout from '../Layout/Layout';
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.scss';

import movieApi from '../../utils/MoviesApi';

function App() {
  const [wasARequest, setWasARequest] = useState(false);
  const [cards, setCards] = useState([]);
  const [isShort, setIsShort] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sortedCards = useMemo(() => {
    if (!isShort) {
      return cards;
    }
    return cards.filter((card) => card.duration <= 40);
  }, [isShort, cards]);

  const sortedAndSearchedCards = useMemo(() => {
    return sortedCards.filter((card) =>
      card.nameRU.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
  }, [searchQuery, sortedCards]);

  if (wasARequest) {
    movieApi
      .getCards()
      .then((res) => setCards(res))
      .then(() => setIsLoading(false))
      .catch((err) => console.log(err));
  }

  return (
    <div className="content">
      <div className="wrapper">
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
          </Route>
          <Route element={<Layout />}>
            <Route
              path="/movies"
              element={
                <Movies
                  cards={sortedAndSearchedCards}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  isShort={isShort}
                  setIsShort={setIsShort}
                  wasARequest={wasARequest}
                  setWasARequest={setWasARequest}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              }
            />
          </Route>
          <Route element={<Layout />}>
            <Route
              path="/saved-movies"
              element={<SavedMovies cards={cards} />}
            />
          </Route>
          <Route element={<Layout />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
