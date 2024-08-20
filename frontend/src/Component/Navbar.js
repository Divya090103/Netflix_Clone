import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="container d-flex justify-content-between">
          <div>
            <h1 className="text-danger">
              <b>Netflix</b>
            </h1>
          </div>
          <div>
            <Link to="/Log_in" className="btn btn-danger mt-3">
              {" "}
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
