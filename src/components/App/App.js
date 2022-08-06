import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Layout from '../Layout/Layout';
import PageNotFound from '../PageNotFound/PageNotFound';

import { movieApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import { useSortedAndSearchedCards } from '../../utils/useCards';

import './App.scss';
import Popup from '../Popup/Popup';
import ProtectedRoute from '../../hoc/ProtectedRoute';

const App = () => {
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [isShort, setIsShort] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(0);
  const sortedAndSearchedCards = useSortedAndSearchedCards(
    cards,
    isShort,
    searchQuery
  );
  const [currentUser, setCurrentUser] = useState({
    email: 'pikachu@pokemon.com',
    password: '123',
  });
  const [error, setError] = useState('');
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const [width, setWidth]   = useState(window.innerWidth);

  const fetchCards = () => {
    setIsLoading(true);
    movieApi
      .getCards()
      .then((res) => setCards(res))
      .then(() => setIsLoading(false))
      .catch((err) => console.log(err));
  };

  const onRegister = (data) => {
    mainApi
      .register(data)
      .then((res) => {
        navigate('/signin');
      })
      .catch((err) => setError(err));
  };

  const onLogin = (data) => {
    mainApi
      .login(data)
      .then((res) => {
        navigate('/movies');
        setIsLoggedIn(true);
      })
      .catch((err) => setError(err));
  };

  return (
    <div className="content">
      <div className="wrapper">
        {/* {error ? <Popup visible={true} setVisible={setModal} setError={setError}> {error} 💔</Popup> : null} */}
        <Routes>
          <Route path="/signup" element={<Register onRegister={onRegister} />} />
          <Route path="/signin" element={<Login onLogin={onLogin} />} />
          <Route path='/' element={<ProtectedRoute  isLoggedIn={isLoggedIn} /> }>
            <Route element={<Layout isLoggedIn={isLoggedIn} />}>
              <Route path="/" element={<Main />} />
              <Route path="/movies" element={
                  <Movies
                    cards={sortedAndSearchedCards}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    isShort={isShort}
                    setIsShort={setIsShort}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    fetchCards={fetchCards}
                    limit={limit}
                    setLimit={setLimit}
                  /> 
                } />
              <Route path="/saved-movies" element={<SavedMovies cards={cards} />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
