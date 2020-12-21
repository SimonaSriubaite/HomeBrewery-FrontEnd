import React, { useContext } from "react";
import { FormTemplate } from "../../components";
import { AddBeerForm } from "../../utils/formData";
import { AuthContext } from "../../context/AuthContext";
import BreweryImg from "../../assets/brewery.jpg";
import "./AddBeer.scss";

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
    .catch((error) => error);
}

function AddBeer() {
  const authContext = useContext(AuthContext);
  const beerStyles = [
    { id: 0, value: "select", text: "Please Select" },
    { id: 1, value: "AIPA", text: "AIPA" },
    { id: 2, value: "IPA", text: "IPA" },
    { id: 3, value: "Pale Ale", text: "Pale Ale" },
    { id: 4, value: "Lager", text: "Lager" },
    { id: 5, value: "Porter", text: "Porter" },
  ];

  return (
    <div className="addbeer">
      <div className="addbeer__container">
        <figure className="addbeer__container-figure">
          <img
            className="addbeer__container-figure--img"
            src={BreweryImg}
            alt="Beer brewing sketch."
          />
        </figure>
      </div>
      <div className="addbeer__container addbeer__container--sec">
        <div>
          <h1 className="addbeer__container-title">Add some beer</h1>
          <FormTemplate
            callback={(fieldValues) => addBeer(fieldValues, authContext)}
            fields={AddBeerForm}
            options={beerStyles}
          />
        </div>
      </div>
    </div>
  );
}

export default AddBeer;
