import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("authorize");
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div
            translate="no"
            spellCheck="false"
            className="fs-1 text-danger"
            style={{
              textAlign: "start",
              transitionProperty: "opacity, transform",
              fontFamily: `"Matemasie variant0", Tofu`,
              // fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              fontWeight: 900,
              fontStyle: "normal",
              fontStretch: "normal",
              fontOpticalSizing: "auto",
              lineHeight: "initial",
              opacity: 1,
              transitionDuration: "350ms",
            }}
          >
            Netflix
          </div>
          &nbsp;
          <button
            className="navbar-toggler bg-primary"
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
                <Link
                  className="nav-link active text-secondary fs-5"
                  aria-current="page"
                  to="/logged"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-secondary fs-5"
                  aria-current="page"
                  href="#"
                  to="/TvShows"
                >
                  TVs Shows
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-secondary fs-5"
                  aria-current="page"
                  href="#"
                  to="/Movies"
                >
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-secondary fs-5"
                  aria-current="page"
                  to="/List"
                >
                  {" "}
                  My list
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                icon
              </button>
              &nbsp;
              <button
                className="btn btn-outline-success"
                onClick={handleLogOut}
              >
                LogOut
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
