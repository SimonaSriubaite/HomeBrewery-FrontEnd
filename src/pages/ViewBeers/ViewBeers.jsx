import React, { useEffect, useState, useContext } from "react";
import { Loader, Slider } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import "./ViewBeers.scss";

function deleteButton(e, data, setData) {
  const pass = prompt("Please enter the password");
  const beerId = Number(e.target.value);
  if (pass != null) {
    fetch(`http://jy8e.c.dedikuoti.lt:8081/delete/${beerId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ pass }),
    }).then((item) => {
      console.log(data);
      setData(data.filter((item) => beerId !== item.id));
    });
  }
}

function ViewBeers() {
  const [data, setData] = useState([]);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:8080/viewbeerquantity", {
      headers: {
        Authorization: `Bearer ${authContext.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [authContext.token]);

  return (
    <div className="viewbeers">
      {data ? (
        <div>
          <Slider />
          <table className="viewbeers__table">
            <thead>
              <tr className="viewbeers__table-row">
                <th className="viewbeers__table-column">Beer Name</th>
                <th className="viewbeers__table-column">Beer Type</th>
                <th className="viewbeers__table-column">Alcohol</th>
                <th className="viewbeers__table-column">IBU</th>
                <th className="viewbeers__table-column">Total</th>
                <th className="viewbeers__table-column">Delete?</th>
              </tr>
            </thead>
            <tbody>
              {data.map((beer) => (
                <tr key={beer.id} className="viewbeers__table-row">
                  <td className="viewbeers__table-column">{beer.title}</td>
                  <td className="viewbeers__table-column">{beer.style}</td>
                  <td className="viewbeers__table-column">{beer.alcohol}</td>
                  <td className="viewbeers__table-column">{beer.IBU}</td>
                  <td className="viewbeers__table-column">{beer.Total}</td>
                  <td>
                    <button
                      className="viewbeers__table-button"
                      value={beer.id}
                      onClick={(e) => {
                        deleteButton(e, data, setData);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default ViewBeers;
