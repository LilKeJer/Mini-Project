import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginUsers({ login, email, password }) {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const navigate = useNavigate();

  return (
    <div>
      {login?.map((akun) => {
        if (
          email === akun.email &&
          password === akun.password &&
          isLoggedIn === true
        ) {
          alert(` "${akun.nama}" Berhasil Login`);
          setisLoggedIn(!true);
          localStorage.setItem("user", akun.id_user);
          navigate("/Profile");
        }
      })}
      {console.log("Test")}
      {console.log(isLoggedIn)}
    </div>
  );
}
