import { useEffect, useMemo, useState } from 'react';
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
  const [cards, setCards] = useState([]);
  const [isShort, setIsShort] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const shortCards = useMemo(() => {
    if (!isShort) {
      return cards
    }
    return cards.filter(card => card.duration <= 40)
  }, [isShort, cards])

  const sortAndSearchedCards = useMemo(() => {
    return shortCards.filter(card => card.nameRU.toLowerCase().includes(searchQuery.toLocaleLowerCase()));
  }, [searchQuery, shortCards]);

  useEffect(() => {
    movieApi.getCards().then((res) => setCards(res));
  }, []);

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
                  cards={sortAndSearchedCards}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  isShort={isShort}
                  setIsShort={setIsShort}
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
