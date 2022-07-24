import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './App.scss';
import Main from '../Main/Main';

function App() {
  return (
    <div className="content">
      <div className="wrapper">
        {/* <Header /> */}
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
