import React, { useEffect, useState, useContext } from "react";
import { Loading } from "../../components";
import { AuthContext } from "../../context/AuthContext";

function deleteButton(e, data, setData) {
  const pass = prompt("Please enter the password");
  const beerId = Number(e.target.value);
  if (pass != null) {
    fetch(`http://localhost:8080/delete/${beerId}`, {
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

function About() {
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
    <div>
      {data ? (
        <table>
          <thead>
            <tr>
              <th>Beer Name</th>
              <th>Beer Type</th>
              <th>Alcohol</th>
              <th>IBU</th>
            </tr>
          </thead>
          <tbody>
            {data.map((beer) => (
              <tr key={beer.id}>
                <td>{beer.title}</td>
                <td>{beer.style}</td>
                <td>{beer.alcohol}</td>
                <td>{beer.IBU}</td>
                <td>{beer.Total}</td>
                <td>
                  <button
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
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default About;
