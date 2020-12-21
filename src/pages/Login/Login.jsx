import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Notification, InputField } from "../../components";
import "./Login.scss";

function login(data, context, setError, history) {
  fetch("http://jy8e.c.dedikuoti.lt:8081/login", {
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
      <div>
        {error && <Notification>{error}</Notification>}
        <form
          className="login__form"
          onSubmit={(e) => {
            e.preventDefault();

            login(userDetails, authTokenContext, setError, history);
          }}
        >
          <InputField
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

          <InputField
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

          <button className="login__button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
