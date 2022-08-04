import React from 'react'
import { Link } from 'react-router-dom';

import './NavTab.scss'

const NavTab = () => {
  return (
    <section className='nav-tab'>
      <Link to="/" className="nav-tab__link nav-tab__link-logo"/>
      <Link to="/signup" className="nav-tab__link nav-tab__link-signin">Регистрация</Link>
      <Link to="/signin" className="nav-tab__link nav-tab__link-signup">Войти</Link>
    </section>
  )
}

export default NavTab