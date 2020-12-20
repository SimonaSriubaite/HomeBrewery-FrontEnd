import React, { useState } from "react";
import { InputForm } from "../../components";
import "./Register.scss";

function register(data) {
  fetch("http://localhost:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((data) => alert("The information was added successfully"));
}

function Register() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  return (
    <div className="register">
      <form
        className="register__form"
        onSubmit={(e) => {
          e.preventDefault();

          register(userDetails);
        }}
      >
        <InputForm
          type="text"
          label="Username"
          placeholder="username"
          minLength="6"
          maxLength="20"
          required
          handleChange={(e) =>
            setUserDetails({
              ...userDetails,
              username: e.target.value.toLowerCase(),
            })
          }
        />

        <InputForm
          type="password"
          label="Password"
          placeholder="password"
          minLength="8"
          maxLength="64"
          required
          handleChange={(e) =>
            setUserDetails({
              ...userDetails,
              password: e.target.value,
            })
          }
        />

        <button className="register__button">Register</button>
      </form>
    </div>
  );
}

export default Register;
