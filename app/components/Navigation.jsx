import React from 'react';
import { Link, IndexLink } from 'react-router';

const Navigation = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Time App</li>
          <li>
            <IndexLink
              to="/"
              activeClassName="active-link">Stopwatch</IndexLink>
          </li>
          <li>
            <Link
              to="/timer"
              activeClassName="active-link">Timer</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://www.github.com/caiolopes" target="_blank">Caio Lopes</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;