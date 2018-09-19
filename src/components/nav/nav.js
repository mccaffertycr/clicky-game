import React from 'react';
import './nav.css';

const Nav = props => (
  <div className="container-fluid">
    <nav className="navbar mb-1 bg-light">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">Click-Out!!</a>
      </div>
      <ul className="nav navbar-nav">
        <li>{props.msg}</li>
        <li>Score: {props.score} | High Score: {props.highScore}</li>
      </ul>
    </nav>
  </div>
);

export default Nav;