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
import Popup from '../Popup/Popup';

import { movieApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import { useShortedAndSearchedCards } from '../../utils/useCards';
import { ProtectedRoute } from '../../hoc/ProtectedRoute';
import { CurrentUserContext } from '../../hoc/CurrentUserContext';
import './App.scss';

import { auth } from '../../utils/Auth';

const App = () => {
  const [currentUser, setCurrentUser] = useState({ email: '', name: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);
  const [filter, setFilter] = useState({ query: '', short: false });
  const [limit, setLimit] = useState(0);
  const [popupMessage, setPopupMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [request, setRequest] = useState("");


  const filteredCards = useShortedAndSearchedCards(cards, filter, likedMovies);
  const filteredSavedCards = useShortedAndSearchedCards(savedCards, filter);

  useEffect(() => {
    checkToken()
    if (isLoggedIn) {
      getLikedMovies()
    }
  }, [isLoggedIn]);
  
  const checkToken = () => {
    const JWT = localStorage.getItem('JWT');
    if (JWT) {
      mainApi.getUser(JWT)
      .then((res) => {
        setIsLoggedIn(true);
        setCurrentUser(res);
      })
      .catch(err => setPopupMessage(err))
    }
  }

  const registration = (data) => {
    const loginData = { email: data.email, password: data.password };
    auth.registration(data)
      .then(() => logIn(loginData))
      .catch(err => setPopupMessage(err))
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
        .catch(err => setPopupMessage(err))
    })
    .catch(err => setPopupMessage(err))
  };

  const logOut = () => {
    localStorage.removeItem('JWT');
    setIsLoggedIn(false);
    setCurrentUser({ name: '', email: '' });
  };

  const editProfile = (data) => {
    mainApi.updateUser(data, localStorage.getItem('JWT'))
    .then(res => {
      setPopupMessage("Профиль успешно обновлен! 😎")
      setCurrentUser(res)})
    .catch(err => setPopupMessage(err))
  };

  const getCards = () => {
    setIsLoading(true);
    movieApi
      .getCards(localStorage.getItem('JWT'))
      .then((res) => setCards(res))
      .then(() => setIsLoading(false))
      .then(() => getSavedCards())
      .catch(err => setPopupMessage(err))
  };

  const getSavedCards = () => {
    setIsLoading(true);
    mainApi
      .getMovies(localStorage.getItem('JWT'))
      .then((res) => setSavedCards(res))
      .then(() => setIsLoading(false))
      .catch(err => setPopupMessage(err))
  };

  const getLikedMovies = () => {
    mainApi.getMovies(localStorage.getItem('JWT'))
      .then(res => setLikedMovies(res.map(i => i.nameEN)))
      .catch(err => setPopupMessage(err))
  }

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
    mainApi.addMovie(card, localStorage.getItem('JWT'))
    .then(res => {
      setLikedMovies(list => [...list, res.nameEN])
      setSavedCards([...savedCards, res])
    })
    .catch(err => setPopupMessage(err))
  };

  const removeCard = (card) => {
    const delCard = (id) => {
      mainApi.removeMovie(id, localStorage.getItem('JWT'))
      .then(() => setSavedCards(savedCards.filter((c) => c._id !== id)))
      .then(() => setLikedMovies(likedMovies.filter((c) => c !== card.nameEN)))
      .catch(err => setPopupMessage(err))
    }
    if (card._id) {
      return delCard(card._id)
    } else {
      const currenId = savedCards.filter(c => c.nameEN === card.nameEN)[0]._id;
      return delCard(currenId)
    }

  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn, setIsLoggedIn }} >
      <div className="content">
        <div className="wrapper">
          {popupMessage ? <Popup popupMessage={popupMessage} setPopupMessage={setPopupMessage}> {popupMessage}</Popup> : null }
          <Routes>
            <Route path="/signup" element={<Register registration={registration} />} />
            <Route path="/signin" element={<Login logIn={logIn} />} />
            <Route element={<Layout />}>
              <Route path="/" element={<Main />} />
            </Route>
            <Route path="/" element={<ProtectedRoute />}>
              <Route element={<Layout />}>
                <Route path="/movies" element={
                    <Movies
                      filteredCards={filteredCards}
                      filter={filter}
                      setFilter={setFilter}
                      isLoading={isLoading}
                      limit={limit}
                      setLimit={setLimit}
                      getCards={getCards}
                      saveCard={saveCard}
                      removeCard={removeCard}
                      likedMovies={likedMovies}
                      request={request}
                      setRequest={setRequest}
                    /> } />
                <Route path="/saved-movies" element={
                    <SavedMovies
                      filteredCards={filteredSavedCards}
                      filter={filter}
                      setFilter={setFilter}
                      isLoading={isLoading}
                      limit={limit}
                      setLimit={setLimit}
                      getCards={getCards}
                      getSavedCards={getSavedCards}
                      saveCard={saveCard}
                      removeCard={removeCard}
                    /> } />
                <Route path="/profile" element={
                    <Profile logOut={logOut} editProfile={editProfile} />
                  } />
              </Route>
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
