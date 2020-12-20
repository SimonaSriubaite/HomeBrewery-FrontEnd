import React, { useState, useEffect, useContext } from "react";
import { ReactComponent as Dot } from "../../assets/dot.svg";
import { AuthContext } from "../../context/AuthContext";
import classNames from "classnames";
import "./SliderCard.scss";

const SliderCard = (props) => {
  const [data, setData] = useState([]);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetch("http://jy8e.c.dedikuoti.lt:8081/beers", {
      headers: {
        Authorization: `Bearer ${authContext.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [authContext.token]);

  return (
    <div className="slide">
      <figure className="slide__figure">
        <img className="slide__figure-img" src={props.image} alt={props.name} />
      </figure>
      <section className="slide__section">
        <div className="slide-dots">
          {data.map((dot, i) => (
            <div
              className={classNames("slide-dots__item", {
                "slide-dots__item--active": i + 1 === props.slideNumber,
              })}
              key={i}
            >
              <Dot className="slide-dots__item-icon" />
            </div>
          ))}
        </div>
        <span className="slide__section-span">{props.style}</span>
        <h2 className="slide__section-title">{props.title}</h2>
        <p className="slide__section-paragraph">{props.description}</p>
        <button className="slide__button">Learn more</button>
      </section>
    </div>
  );
};

export default SliderCard;
