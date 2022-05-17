import React from "react";

import { Outlet, Link } from "react-router-dom";
import "../assets/styles.css";

function navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{
          // backgroundImage: `url(${Foto2})`,
          backgroundColor: "#E6D031",
        }}
      >
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse navControl"
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className=" ">
                {
                  <Link className="nav-link active px-5 mx-5" to={"/"}>
                    <p className="fontNav">HOME</p>
                  </Link>
                }
              </li>
              <li className="nav-item">
                {
                  <Link className="nav-link px-5 mx-5" to={"/Album"}>
                    <p className="fontNav">ALBUM</p>
                  </Link>
                }
              </li>
            </ul>
          </div>
          <div className="text-center fontMKnav">
            <span>MAMANG </span> <br />
            <span>KESBOR</span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navControl"
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {
                  <Link className="nav-link active px-5 mx-5" to={"/Tour"}>
                    <p className="fontNav">TOUR</p>
                  </Link>
                }
              </li>
              <li className="nav-item">
                {
                  <Link className="nav-link px-5 mx-5" to={"/Profile"}>
                    <p className="fontNav">PROFIL</p>
                  </Link>
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {<Outlet />}
    </div>
  );
}

export default navbar;
