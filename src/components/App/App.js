import { Children, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Layout from '../Layout/Layout';
import PageNotFound from '../PageNotFound/PageNotFound';
import Popup from '../Popup/Popup';

import { movieApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import { useShortedAndSearchedCards } from '../../utils/useCards';
import { useLikedShortedAndSearchedCards } from '../../utils/useCards';
import { ProtectedRoute } from '../../hoc/ProtectedRoute';
import { CurrentUserContext } from '../../hoc/CurrentUserContext';
import './App.scss';

import { auth } from '../../utils/Auth';

const App = () => {
  const [currentUser, setCurrentUser] = useState({ email: '', name: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [filter, setFilter] = useState({ query: '', short: false });
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(0);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();

  const filteredCards = useShortedAndSearchedCards(cards, filter);
  const filteredSavedCards = useShortedAndSearchedCards(savedCards, filter);

  useEffect(() => {
    checkToken()
  }, []);
  
  const checkToken = () => {
    const JWT = localStorage.getItem('JWT');
    if (JWT) {
      mainApi.getUser(JWT)
      .then((res) => {
        setIsLoggedIn(true);
        setCurrentUser(res);
        navigate('/')
      });
    }
  }
  
  const registration = (data) => {
    const loginData = { email: data.email, password: data.password };
    auth.registration(data)
      .then(() => logIn(loginData))
  };

  const logIn = (data) => {
    let JWT;
    auth.login(data)
    .then((res) => {
      JWT = res.token;
      localStorage.setItem('JWT', JWT);
      setIsLoggedIn(true);
      navigate('/movies');
      mainApi.getUser(JWT)
        .then(res => setCurrentUser(res))
    })
  };

  const logOut = () => {
    localStorage.removeItem('JWT');
    setIsLoggedIn(false);
    setCurrentUser({ name: '', email: '' });
  };

  const getCards = () => {
    setIsLoading(true);
    movieApi
      .getCards()
      .then((res) => setCards(res))
      .then(() => setIsLoading(false))
      .catch((err) => console.log(err));
  };

  const getSavedCards = () => {
    setIsLoading(true);
    mainApi
      .getMovies()
      .then((res) => setSavedCards(res))
      .then(() => setIsLoading(false))
      .catch((err) => console.log(err));
  };



  const handler = () => {
    console.log(localStorage.getItem('JWT'))
    mainApi.getUser(localStorage.getItem('JWT')).then(res => console.log(res))
  };



  const editProfile = (data) => {
    mainApi.updateUser(data, localStorage.getItem('JWT'))
    .then(res => setCurrentUser(res))
  };

  const saveCard = (data) => {
    const card = {
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: 'https://api.nomoreparties.co/' + data.image.url,
      trailerLink: data.trailerLink,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
      thumbnail:
        'https://api.nomoreparties.co/' + data.image.formats.thumbnail.url,
      movieId: data.id,
    };
  };

  const removeCard = (card) => {
    mainApi.removeMovie(card._id);
    setSavedCards((savedCards) =>
      savedCards.filter((c) => (c._id !== card._id ? c : ''))
    );
  };

  const togglePopup = (popupVisible) => {
    setPopupVisible(!popupVisible);
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, isLoggedIn, setIsLoggedIn }}
    >
      <button onClick={handler}>click</button>
      <div className="content">
        <div className="wrapper">
          {/* {popupMessage ? <Popup setVisible={setPopupVisible} setPopupMessage={setPopupMessage}>{popupMessage}</Popup> : null} */}
          <Routes>
            <Route
              path="/signup"
              element={<Register registration={registration} />}
            />
            <Route path="/signin" element={<Login logIn={logIn} />} />
            <Route element={<Layout />}>
              <Route path="/" element={<Main />} />
            </Route>
            <Route path="/" element={<ProtectedRoute />}>
              <Route element={<Layout />}>
                <Route
                  path="/movies"
                  element={
                    <Movies
                      filteredCards={filteredCards}
                      filter={filter}
                      setFilter={setFilter}
                      isLoading={isLoading}
                      setIsLoading={setIsLoading}
                      limit={limit}
                      setLimit={setLimit}
                      getCards={getCards}
                      saveCard={saveCard}
                      removeCard={removeCard}
                    />
                  }
                />
                <Route
                  path="/saved-movies"
                  element={
                    <SavedMovies
                      filteredCards={filteredSavedCards}
                      filter={filter}
                      setFilter={setFilter}
                      isLoading={isLoading}
                      setIsLoading={setIsLoading}
                      limit={limit}
                      setLimit={setLimit}
                      getCards={getCards}
                      getSavedCards={getSavedCards}
                      saveCard={saveCard}
                      removeCard={removeCard}
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <Profile logOut={logOut} editProfile={editProfile} />
                  }
                />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
