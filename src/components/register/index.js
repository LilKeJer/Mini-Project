import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import { TabTitle } from "../../utils/GeneralFunctions";
import { TAMBAH_USER, TAMBAH_MUSIC_PROFILE } from "../../utils/gql";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import "../../assets/styles.css";
function Index() {
  const navigate = useNavigate();
  TabTitle("Register");
  const [addUser, { data: dataTour }] = useMutation(TAMBAH_USER);
  const [addMusicProfile] = useMutation(TAMBAH_MUSIC_PROFILE);

  const baseRegister = {
    nama: "",
    email: "",
    password: "",
    passwordValidate: "",
  };

  const baseError = {
    email: "",
    password: "",
    passwordValidate: "",
  };

  const [register, setregister] = useState(baseRegister);
  const [errorMessage, setErrorMessage] = useState(baseError);

  const regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const idUser = dataTour?.insert_user.returning[0].id_user;

  useEffect(() => {
    if (idUser !== undefined) {
      addMusicProfile({
        variables: {
          id_user: idUser,
        },
      });
    }
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      if (!regexEmail.test(value)) {
        setErrorMessage({ ...errorMessage, [name]: "Email Tidak Sesuai" });
      } else {
        setErrorMessage({ ...errorMessage, [name]: "" });
      }
    }
    if (name === "passwordValidate") {
      if (value !== register.password) {
        setErrorMessage({ ...errorMessage, [name]: "Password tidak sama" });
      } else {
        setErrorMessage({ ...errorMessage, [name]: "" });
      }
    }

    setregister({ ...register, [name]: value });
  };

  const handleSubmit = (e) => {
    if (errorMessage.email !== "" || errorMessage.passwordValidate !== "") {
      console.log("HEREEE");
      alert(`register Pendaftar Tidak Sesuai`);
    } else {
      console.log("HEREE1");
      addUser({
        variables: {
          nama: register.nama,
          email: register.email,
          password: register.passwordValidate,
        },
      });
      alert(`register Selesai`);
      resetForm();
    }
    e.preventDefault();
  };

  const resetForm = () => {
    console.log(resetForm);
    setregister(baseRegister);
    setErrorMessage(baseError);
  };

  return (
    <div className="text-center mt-5 pt-5">
      <Navbar />

      <p className="fontLogin">REGISTER</p>
      <div
        className="container formStyle"
        style={{ backgroundColor: "#E6D031" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="pb-3">
            <label className="mt-4 ">
              <input
                required
                type="nama"
                name="nama"
                value={register.nama}
                onChange={handleChange}
                placeholder="nama"
                className="inputStyle text-center"
              />
            </label>
          </div>
          <div className="pb-3">
            <label className="">
              <input
                required
                type="email"
                name="email"
                value={register.email}
                onChange={handleChange}
                placeholder="Email"
                className="inputStyle text-center"
              />
            </label>
          </div>
          <div className="mb-3 ">
            <label>
              <input
                required
                type="password"
                name="password"
                value={register.password}
                onChange={handleChange}
                placeholder="password"
                className="inputStyle text-center "
              />
            </label>
          </div>
          <div className="mb-3">
            <label>
              <input
                required
                type="password"
                name="passwordValidate"
                value={register.passwordValidate}
                onChange={handleChange}
                placeholder="passwordValidate"
                className="inputStyle text-center"
              />
            </label>
          </div>
          <div>
            {Object.keys(errorMessage).map((key) => {
              if (errorMessage[key] !== "") {
                return <p key={key}>{errorMessage[key]}</p>;
              }
              return null;
            })}
          </div>

          <div className="p-3">
            <input className="loginButton" type="submit" value="Daftar" />
          </div>
          <div className="p-3">
            <button className="loginButton" onClick={resetForm}>
              Reset
            </button>
          </div>
        </form>
        <p>Sudah punya akun?</p>
        <button
          className="homeButton"
          onClick={() => {
            navigate("/Login");
          }}
        >
          <p
            style={{
              fontSize: "20px",
            }}
          >
            Login
          </p>
        </button>
      </div>
    </div>
  );
}

export default Index;
