import React from "react";
import logo from "../images/favicon.ico";

function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand text-primary" href="https://google.com">
            <img
              src={logo}
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-text-top mx-2"
            />
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link active text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                  aria-current="page"
                  href="https://google.com"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                  href="https://google.com"
                >
                  About Us
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleDark}
                />
                <label
                  className={`form-check-label text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                  for="flexSwitchCheckDefault"
                >
                  Enable Dark Mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
