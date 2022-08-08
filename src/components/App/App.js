import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Layout from "../Layout/Layout";
import PageNotFound from "../PageNotFound/PageNotFound";
import Popup from "../Popup/Popup";

import { movieApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import { useShortedAndSearchedCards } from "../../utils/useCards";
import { ProtectedRoute } from "../../hoc/ProtectedRoute";
import { CurrentUserContext } from "../../hoc/CurrentUserContext";
import "./App.scss";

const App = () => {
  const [currentUser, setCurrentUser] = useState({ email: "", name: "" });
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [filter, setFilter] = useState({query:'', short: false})
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(0);
  const filteredCards = useShortedAndSearchedCards(cards, filter)
  const filteredSavedCards = useShortedAndSearchedCards(savedCards, filter);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkToken();
  }, []);

  const fetchCards = () => {
    setIsLoading(true);
    movieApi
      .getCards()
      .then((res) => setCards(res))
      .then(() => setIsLoading(false))
      .catch((err) => console.log(err));
  };

  const getSavedCards = () => {
    mainApi.getMovies().then((res) => {
      setSavedCards(res);
    });
  };

  const checkToken = () => {
    const JWT = localStorage.getItem("JWT");
    if (JWT) {
      mainApi
        .checkValidityToken(JWT)
        .then(() => setIsLoggedIn(true))
        .then(() => navigate("/movies"))
        .then(() =>
          mainApi.getUser().then((res) => {
            setCurrentUser(res);
          })
        );
    }
  };

  const registration = (data) => {
    mainApi
      .register(data)
      .then(() => logIn({ email: data.email, password: data.password }))
      .catch((err) => setPopupMessage(err));
  };

  const logIn = (data) => {
    mainApi
      .login(data)
      .then((res) => {
        localStorage.setItem("JWT", res.token);
        setIsLoggedIn(true);
        navigate("/movies");
        mainApi
          .checkValidityToken(localStorage.getItem("JWT"))
          .then((res) => setCurrentUser(res));
      })
      .catch((err) => setPopupMessage(err));
    getSavedCards();
  };

  const logOut = () => {
    localStorage.removeItem("JWT");
    setIsLoggedIn(false);
    setCurrentUser({ name: "", email: "" });
  };

  const editProfile = (data) => {
    mainApi
      .updateUser(data)
      .then(() => setCurrentUser(data))
      .catch((err) => setPopupMessage(err));
  };

  const saveCard = (data) => {
    const card = {
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: "https://api.nomoreparties.co/" + data.image.url,
      trailerLink: data.trailerLink,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
      thumbnail:
        "https://api.nomoreparties.co/" + data.image.formats.thumbnail.url,
      movieId: data.id,
    };
    mainApi.addMovie(card).then((res) => setSavedCards([...savedCards, res]));
  };

  const removeCard = (card) => {
    mainApi.removeMovie(card._id).then((res) => console.log(res));
    setSavedCards((savedCards) =>
      savedCards.filter((c) => (c._id !== card._id ? c : ""))
    );
  };

  const togglePopup = (popupVisible) => {
    setPopupVisible(!popupVisible);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="content">
        <div className="wrapper">
          {/* {popupMessage ? <Popup setVisible={setPopupVisible} setPopupMessage={setPopupMessage}>{popupMessage}</Popup> : null} */}
          <Routes>
            <Route
              path="/signup"
              element={<Register registration={registration} />}
            />
            <Route path="/signin" element={<Login logIn={logIn} />} />
            <Route element={<Layout isLoggedIn={isLoggedIn} />}>
              <Route path="/" element={<Main />} />
            </Route>
            <Route
              path="/"
              element={<ProtectedRoute isLoggedIn={isLoggedIn} />}
            >
              <Route element={<Layout isLoggedIn={isLoggedIn} />}>
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
                      fetchCards={fetchCards}
                      saveCard={saveCard}
                      removeCard={removeCard}
                    />
                  }
                />
                <Route
                  path="/saved-movies"
                  element={
                    <SavedMovies
                      filteredSavedCards={filteredSavedCards}
                      filter={filter}
                      setFilter={setFilter}
                      getSavedCards={getSavedCards}
                      savedCards={savedCards}
                      isLoading={isLoading}
                      setIsLoading={setIsLoading}
                      limit={limit}
                      setLimit={setLimit}
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
