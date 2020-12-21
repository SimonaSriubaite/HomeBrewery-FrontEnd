import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import "./Header.scss";

function Header({ loggedIn, logout }) {
  return (
    <nav className="header" role="navigation" aria-label="main navigation">
      <div className="header__menu">
        <div className="header__menu-start">
          <figure className="header__logo">
            <NavLink to="/">
              <img className="header__logo-img" src={logoImg} alt="Logo" />
            </NavLink>
          </figure>
          <NavLink to="/" exact={true} className="header__menu-item">
            Home
          </NavLink>
          {loggedIn && (
            <>
              <NavLink to="/view-beers" className="header__menu-item">
                View Beers
              </NavLink>
              <NavLink to="/add-beer" className="header__menu-item">
                Add Beer
              </NavLink>
              <NavLink to="/add-bottle" className="header__menu-item">
                Add Bottle
              </NavLink>
            </>
          )}
        </div>

        <div className="header__menu-end">
          <div className="buttons">
            {!loggedIn && (
              <>
                <NavLink to="/register" className="header__menu-item">
                  Register
                </NavLink>
                <NavLink to="/login" className="header__menu-item">
                  Log in
                </NavLink>
              </>
            )}
            {loggedIn && (
              <button
                className="header__menu-item header__menu-button"
                onClick={logout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
