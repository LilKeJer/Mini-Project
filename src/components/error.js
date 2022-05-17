import React from "react";
import { TabTitle } from "../utils/GeneralFunctions";
import { useNavigate } from "react-router-dom";

import "../assets/styles.css";

function Error() {
  const navigate = useNavigate();
  TabTitle("Error");
  return (
    <div className="container text-center fontAll mt-5">
      <p
        style={{
          fontSize: "96px",
        }}
      >
        404
      </p>
      <p
        style={{
          fontSize: "96px",
        }}
      >
        Page not Found
      </p>
      <button
        className="homeButton"
        onClick={() => {
          navigate("/");
        }}
      >
        <p
          style={{
            fontSize: "50px",
          }}
        >
          Back to Home
        </p>
      </button>
    </div>
  );
}

export default Error;
