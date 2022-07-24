import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer';

import './App.scss';

function App() {
  return (
    <div className="content">
      <div className="wrapper">
        <Header />
        <Routes></Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
