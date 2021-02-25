import React from 'react';
import logo from './logo.svg';
import './Header.scss';

const Header = (props) => (
  <header className="header">
    <img src={logo} alt="Sauce Labs" className="logo" />
  </header>
);

export default Header;
