import React, { useState, useEffect, useContext } from "react";
import { FormTemplate } from "../../components";
import { ChangeQuantityForm } from "../../utils/formData";
import { AuthContext } from "../../context/AuthContext";

function addBottle(fieldValues, authContext) {
  fetch("http://localhost:8080/changebeerquantity", {
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

function AddBottle() {
  const authContext = useContext(AuthContext);
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/beers", {
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
    <>
      <FormTemplate
        callback={(fieldValues) => addBottle(fieldValues, authContext)}
        fields={ChangeQuantityForm}
        options={data}
      />
    </>
  );
}

export default AddBottle;
