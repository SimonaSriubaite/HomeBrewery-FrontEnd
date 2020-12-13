import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Header.style";
import logoImg from "../../assets/logo.png";

function Header({ loggedIn, logout }) {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/">
          <S.Logo src={logoImg} alt="Logo" />
        </Link>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>

          <Link to="/about" className="navbar-item">
            About
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {!loggedIn && (
                <>
                  <Link to="/register" className="button is-primary">
                    <strong>Register</strong>
                  </Link>
                  <Link to="/login" className="button is-light">
                    Log in
                  </Link>
                </>
              )}
              {loggedIn && (
                <button className="button is-light" onClick={logout}>
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
