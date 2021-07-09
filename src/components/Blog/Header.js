import React from "react";
import { Switch, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="top-nav1 navbar navbar-expand-lg navbar-dark fixed-top py-md-4 align-items-end">
      <Link
        id="brand"
        to="/blog"
        className="navbar-toggler1 ml-auto navbar-brand"
        type="Link"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-expanded="false"
      >
        <span className="navbar-toggler-icon">JOURNAL</span>
      </Link>

      <div className="collapse navbar-collapse top-nav1" id="navbarToggler">
        <Switch>
          <ul className="navbar-nav ml-auto" id="menu_Links">
            <li
              className="nav-item1"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link className="nav-link" to="/blog">
                HOME
              </Link>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link className="nav-link" to="/blog/compose">
                COMPOSE
              </Link>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link className="nav-link" to="/blog/about">
                ABOUT
              </Link>
            </li>
          </ul>
        </Switch>
      </div>
    </nav>
  );
};

export default Header;
