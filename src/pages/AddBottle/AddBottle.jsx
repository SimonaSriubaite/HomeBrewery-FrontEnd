import React, { useState, useEffect, useContext } from "react";
import { FormTemplate, Notification } from "../../components";
import { ChangeQuantityForm } from "../../utils/formData";
import { AuthContext } from "../../context/AuthContext";
import "./AddBottle.scss";

function addBottle(fieldValues, authContext, setError) {
  fetch("http://jy8e.c.dedikuoti.lt:8081/changebeerquantity", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authContext.token}`,
    },
    body: JSON.stringify(fieldValues),
  })
    .then((res) => res.json())
    .catch((error) => setError(error.message));
}

function AddBottle() {
  const authContext = useContext(AuthContext);
  const [data, setData] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://jy8e.c.dedikuoti.lt:8081/beers", {
      headers: {
        Authorization: `Bearer ${authContext.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        setData(
          data.map((item) => {
            return { id: item.id, value: item.id, text: item.title };
          })
        )
      );
  }, [authContext.token]);

  return (
    <div className="addbottle">
      <figure className="addbottle__figure">
        <img
          className="addbottle__figure-img"
          src="https://i2.wp.com/sjbeerscene.com/wp-content/uploads/2019/08/beer_shelf.jpg?fit=1080%2C720&ssl=1"
          alt="Shelf with beer bottles. "
        />
      </figure>
      <div className="addbottle__wrapper">
        <div className="addbottle__section">
          <div className="addbottle__section-container">
            <h1 className="addbottle__section-container--title">
              Add the bottle
            </h1>
            <p className="addbottle__section-container--paragraph">
              Here you can change the quantity of already in Add Beer section
              registered beer.
            </p>
          </div>
          <div className="addbottle__section-form">
            {error && <Notification>{error}</Notification>}
            <FormTemplate
              callback={(fieldValues) =>
                addBottle(fieldValues, authContext, setError)
              }
              fields={ChangeQuantityForm}
              options={data}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBottle;
