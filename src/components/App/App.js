import { Routes, Route } from "react-router-dom";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Layout from "../Layout/Layout";
import "./App.scss";

function App() {
  return (
    <div className="content">
      <div className="wrapper">
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route element={<Layout />}>
            <Route path="/movies" element={<Movies />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/saved-movies" element={<SavedMovies />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
