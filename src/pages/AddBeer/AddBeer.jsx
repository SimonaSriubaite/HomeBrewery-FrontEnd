import React, { useState, useContext } from "react";
import { FormTemplate } from "../../components";
import { AddBeerForm } from "../../utils/formData";
import { AuthContext } from "../../context/AuthContext";

function addBeer(fieldValues, authContext) {
  fetch("http://jy8e.c.dedikuoti.lt:8081/beers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authContext.token}`,
    },
    body: JSON.stringify(fieldValues),
  })
    .then((res) => res.json())
    .then((data) => {})
    .catch((error) => error);
}

function AddBeer() {
  const authContext = useContext(AuthContext);
  //const [beers, setBeers] = useState([]);
  const beerStyles = [
    { id: 0, value: "select", text: "Please Select" },
    { id: 1, value: "AIPA", text: "AIPA" },
    { id: 2, value: "IPA", text: "IPA" },
    { id: 3, value: "Pale Ale", text: "Pale Ale" },
    { id: 4, value: "Lager", text: "Lager" },
  ];

  /*function deleteButton(e) {
    const pass = prompt("Please enter the password");
    const beerId = Number(e.target.value);
    if (pass != null) {
      fetch(`http://localhost:8080/delete/${beerId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authContext.token}`,
        },
        body: JSON.stringify({ pass }),
      }).then(() => {
        setBeers(beers.filter((item) => beerId !== item.id));
      });
    }
  }*/

  return (
    <>
      <FormTemplate
        callback={(fieldValues) => addBeer(fieldValues, authContext)}
        fields={AddBeerForm}
        options={beerStyles}
      />
    </>
  );
}

export default AddBeer;
