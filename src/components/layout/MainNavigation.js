import React from 'react';

import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <span class="navbar-brand mb-0 h1">React MeetUps</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li>
            <Link to="/" className="li-links px-2">
              All Meetups
            </Link>
          </li>
          <li>
            <Link to="/new-meetup" className="li-links px-2">
              Add New Meetup
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="li-links px-2">
              My Favorites
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNavigation;
