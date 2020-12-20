import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Notification, InputForm } from "../../components";
import "./Login.scss";

function login(data, context, setError, history) {
  fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        context.setToken(data.token);
        history.push("/");
      } else {
        return setError(data.msg || "Error");
      }
    })
    .catch((error) => setError(error.message));
}

function Home() {
  const history = useHistory();
  const authTokenContext = useContext(AuthContext);

  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  return (
    <div className="login">
      {error && <Notification>{error}</Notification>}
      <form
        className="login__form"
        onSubmit={(e) => {
          e.preventDefault();

          login(userDetails, authTokenContext, setError, history);
        }}
      >
        <InputForm
          type="text"
          label="Username"
          placeholder="petras123"
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
          placeholder="password123"
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

        <button className="login__button">Login</button>
      </form>
    </div>
  );
}

export default Home;
