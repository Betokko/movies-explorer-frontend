import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './App.scss';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <div className="content">
      <div className="wrapper">
        {/* <Main /> */}
        <Header />
        {/* <Movies/> */}
        <SavedMovies />
        <Footer />
      </div>
    </div>
  );
}

export default App;
