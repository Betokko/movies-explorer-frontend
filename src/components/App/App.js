import { useEffect, useState, useContext } from 'react';
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
import { useSortedAndSearchedCards } from '../../utils/useCards';

import {ProtectedRoute} from '../../hoc/ProtectedRoute';
import { CurrentUserContext } from '../../hoc/CurrentUserContext';

import './App.scss';

const App = () => {
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({})
  const [savedCards, setSavedCards] = useState([]);
  const [isShort, setIsShort] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(0);
  const sortedAndSearchedCards = useSortedAndSearchedCards( cards, isShort, searchQuery );
  const [error, setError] = useState('');
  const [modal, setModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // const [width, setWidth]   = useState(window.innerWidth);
  
  useEffect(() => {
    checkToken()
  }, [])

  const fetchCards = () => {
    setIsLoading(true);
    movieApi
      .getCards()
      .then((res) => setCards(res))
      .then(() => setIsLoading(false))
      .catch((err) => console.log(err));
  };


  const checkToken = () => { 
    const JWT = localStorage.getItem('JWT');
    if (JWT) {
      mainApi.checkValidityToken(JWT)
      .then(() => setIsLoggedIn(true))
      .then(() => navigate('/movies'))
      .then(() => mainApi.getUserInfo().then(res => setCurrentUser(res)))
    }
   }

  const registration = (data) => {
    mainApi
      .register(data)
      .then(() => logIn({email: data.email, password: data.password}))
      .catch((err) => setError(err))
  };

  const logIn = (data) => {
    mainApi
      .login(data)
      .then((res) => {
        localStorage.setItem('JWT', res.token)
        mainApi.checkValidityToken(localStorage.getItem('JWT'))
          .then(res => setCurrentUser(res))
        setIsLoggedIn(true)
        navigate('/movies')
      })
      .catch((err) => setError(err));
  };

  const logOut = () => {
    localStorage.removeItem('JWT');
    setIsLoggedIn(false)
    setCurrentUser({ email: '', name: '' })
  };

  const editProfile = (data) => {
    mainApi
      .updateUserInfo(data)
      .then(res => setCurrentUser(res))
      .catch((err) => setError(err))
  }

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      <div className="content">
        <div className="wrapper">
          {error ? <Popup visible={true} setVisible={setModal} setError={setError}> {error} 💔</Popup> : null}
          <Routes>
            <Route path="/signup" element={<Register registration={registration} />} />
            <Route path="/signin" element={<Login logIn={logIn} />} />
            <Route element={<Layout isLoggedIn={isLoggedIn} />}>
              <Route path="/" element={<Main />} />
            </Route>
            <Route path='/' element={<ProtectedRoute  isLoggedIn={isLoggedIn} /> }>
              <Route element={<Layout isLoggedIn={isLoggedIn} />}>
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
                <Route path="/profile" element={<Profile logOut={logOut} editProfile={editProfile}/>} />
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
