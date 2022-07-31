import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './App.scss';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';

function App() {
  return (
    <div className="content">
      <div className="wrapper">
        <Header />
        {/* <Main /> */}
        {/* <Movies/> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
