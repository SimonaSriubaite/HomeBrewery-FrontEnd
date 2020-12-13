import React, { useState } from "react";
import { Button, InputField, Section } from "../../components";

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
    <Section>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          register(userDetails);
        }}
      >
        <InputField
          type="text"
          labelText="Username"
          placeholderText="username"
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
          placeholderText="password"
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

        <Button color="is-primary">Register</Button>
      </form>
    </Section>
  );
}

export default Register;
