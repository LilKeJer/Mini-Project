import React, { useState } from "react";
import { TabTitle } from "../../utils/GeneralFunctions";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { USERS } from "../../utils/gql";
import LoginUsers from "./loginUsers";
import Navbar from "../navbar";
import "../../assets/styles.css";

function Login() {
  const navigate = useNavigate();
  TabTitle("Login");
  const { data } = useQuery(USERS);

  const baseLogin = {
    email: "",
    password: "",
  };
  const baseError = {
    email: "",
    password: "",
  };
  const userLogin = [];
  const [user, setUser] = useState(userLogin);
  const [login, setLogin] = useState(baseLogin);
  const [errorMassage, setErrorMassage] = useState(baseError);
  const regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      if (!regexEmail.test(value)) {
        setErrorMassage({ ...errorMassage, [name]: "Email Tidak Sesuai" });
      } else {
        setErrorMassage({ ...errorMassage, [name]: "" });
      }
    }

    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    if (errorMassage.email !== "") {
      console.log("HEREEE");
      alert(`login Pendaftar Tidak Sesuai`);
    } else {
      console.log("HEREE1");

      const newUser = {
        email: login.email,
        password: login.password,
      };

      setUser(user.concat(newUser));

      resetForm();
    }
    e.preventDefault();
  };
  const email = user[0]?.email;
  const password = user[0]?.password;

  const resetForm = () => {
    console.log(resetForm);
    setLogin(baseLogin);
    setErrorMassage(baseError);
  };

  return (
    <div className="text-center mt-5 pt-5">
      <Navbar />
      <LoginUsers login={data?.user || []} email={email} password={password} />;
      <p className=" fontLogin">LOGIN</p>
      <div
        className="container formStyle"
        style={{ backgroundColor: "#E6D031" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="pb-3">
            <label className="mt-4">
              <input
                required
                type="email"
                name="email"
                value={login.email}
                onChange={handleChange}
                placeholder="Email"
                className="inputStyle text-center"
              />
            </label>
          </div>
          <div className="mb-3">
            <label>
              <input
                required
                type="password"
                name="password"
                value={login.password}
                onChange={handleChange}
                placeholder="password"
                className="inputStyle text-center"
              />
            </label>
          </div>
          <div>
            {Object.keys(errorMassage).map((key) => {
              if (errorMassage[key] !== "") {
                return <p key={key}>{errorMassage[key]}</p>;
              }
              return null;
            })}
          </div>

          <div className="p-3">
            <input className="loginButton" type="submit" value="Submit" />
          </div>
          <div className="p-3">
            <button className="loginButton" onClick={resetForm}>
              Reset
            </button>
          </div>
        </form>
        <p>Belum punya akun?</p>
        <button
          className="homeButton"
          onClick={() => {
            navigate("/Register");
          }}
        >
          <p
            style={{
              fontSize: "20px",
            }}
          >
            Register
          </p>
        </button>
      </div>
    </div>
  );
}

export default Login;
