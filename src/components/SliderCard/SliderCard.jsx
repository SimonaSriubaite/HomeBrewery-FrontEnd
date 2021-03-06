import React, { useState, useEffect, useContext } from "react";
import { ReactComponent as Dot } from "../../assets/dot.svg";
import { AuthContext } from "../../context/AuthContext";
import classNames from "classnames";
import PropTypes from "prop-types";
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
        <h2 className="slide__section-title">{props.title}</h2>
        <span className="slide__section-span">{props.style}</span>
        <span className="slide__section-span">IBU {props.IBU}</span>
        <span className="slide__section-span">Alcohol {props.alcohol}</span>
      </section>
    </div>
  );
};

SliderCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  about: PropTypes.string,
  description: PropTypes.string,
  slideNumber: PropTypes.number,
};

export default SliderCard;
