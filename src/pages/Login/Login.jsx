import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Notification, InputField, Section, Test } from "../../components";

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
    <Section>
      {error && <Notification>{error}</Notification>}
      <form
        onSubmit={(e) => {
          e.preventDefault();

          login(userDetails, authTokenContext, setError, history);
        }}
      >
        <InputField
          type="text"
          labelText="Username"
          placeholderText="petras123"
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
          labelText="Password"
          placeholderText="password123"
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

        <button>Login</button>
        <Test />
      </form>
    </Section>
  );
}

export default Home;
