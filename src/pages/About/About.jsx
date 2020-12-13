import React, { useEffect, useState, useContext } from "react";
import { Loading } from "../../components";
import * as S from "./About.style";
import { AuthContext } from "../../context/AuthContext";

function About() {
  const [data, setData] = useState([]);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:8080/beers", {
      headers: {
        Authorization: `Bearer ${authContext.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [authContext.token]);

  return (
    <div>
      <S.TableBox>
        <S.TableTitle>Beers</S.TableTitle>
        {data ? (
          <S.Table>
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
                </tr>
              ))}
            </tbody>
          </S.Table>
        ) : (
          <Loading />
        )}
      </S.TableBox>
    </div>
  );
}

export default About;
