import React, { useState } from "react";
import Background from "../Component/Background";
import { Link } from "react-router-dom";
import Accordian from "../Component/Accordian";
const Signup = () => {
  const [mail, setmail] = useState("");

  return (
    <>
      <div className="text-white container signup">
        <h1>
          <b>Unlimited movies, TV shows and more</b>
        </h1>
        <br />
        <h4>Watch wherever you want. Cancel whenever you want.</h4>
        <br />
        <h4>
          Ready to watch? Enter your email address to create or restart your
          membership.
        </h4>
        <div className="d-flex justify-content-center align-items-center mt-3">
          <div>
            <input
              type="email"
              className="p-2 text-secondary custom-input p-1 fs-4"
              style={{ backgroundColor: "black" }}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email Address"
              onChange={(e) => setmail(e.target.value)}
            />
          </div>
          &nbsp;
          <div>
            {mail.length === 0 ? (
              <button
                className="btn bg-danger text-white p-2 fs-3"
                onClick={() => alert("Please enter the mail")}
              >
                <b>Get Started</b>
              </button>
            ) : (
              <Link
                className="btn bg-danger text-white p-2 fs-3"
                to="/Sign"
                state={{ mail }}
              >
                <b>Get Started</b>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
