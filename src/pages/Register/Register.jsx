import React, { useState } from "react";
import { InputForm, Notification } from "../../components";
import "./Register.scss";

function register(data, setError) {
  fetch("http://jy8e.c.dedikuoti.lt:8081/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((error) => setError(error.message));
}

function Register() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  return (
    <div className="register">
      {error && <Notification>{error}</Notification>}
      <form
        className="register__form"
        onSubmit={(e) => {
          e.preventDefault();

          register(userDetails, setError);
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
