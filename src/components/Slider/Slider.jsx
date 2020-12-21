import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
  useContext,
} from "react";
import { SliderCard } from "../../components";
import { ReactComponent as Arrow } from "../../assets/sliderArrow.svg";
import { AuthContext } from "../../context/AuthContext";
import "./Slider.scss";

const Slider = () => {
  const [width, setWindowWidth] = useState(0);

  const slideTrackRef = useRef();

  const slideTrackWidth = () => {
    return slideTrackRef.current.clientWidth;
  };

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const reducer = (state, action) => {
    switch (action) {
      case "RESET":
        return sliderController;
      case "PREV":
        return handlePrev(state);
      case "NEXT":
        return handleNext(state);
      default:
    }
  };

  const slideNumber = () => {
    return 1;
  };

  const sliderController = {
    slideNumber: slideNumber(),
    numOfSlides: 3,
    translateValue: 0,
  };

  const [sliders, dispatch] = useReducer(reducer, sliderController);

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

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [authContext.token]);

  useEffect(() => {
    dispatch("RESET");
  }, [width]);

  function handleNext({ slideNumber, numOfSlides, translateValue }) {
    if (slideNumber >= numOfSlides) {
      return { slideNumber, numOfSlides, translateValue };
    }
    translateValue += -slideTrackWidth();
    return {
      slideNumber: (slideNumber += 1),
      numOfSlides,
      translateValue,
    };
  }

  function handlePrev({ slideNumber, numOfSlides, translateValue }) {
    if (slideNumber <= 1) {
      return { slideNumber, numOfSlides, translateValue };
    }
    translateValue += slideTrackWidth();
    return {
      numOfSlides,
      slideNumber: (slideNumber -= 1),
      translateValue,
    };
  }

  const styleTransform = {
    transform: `translateX(${sliders.translateValue}px)`,
    transition: "transform ease-out 0.45s",
  };

  return (
    <div className="slider">
      <div className="slider-wrapper">
        <div
          className="slider__track"
          ref={slideTrackRef}
          style={styleTransform}
        >
          {data &&
            data.map((slide) => {
              return (
                <SliderCard
                  key={slide.id}
                  image={slide.image}
                  title={slide.title}
                  style={slide.style}
                  IBU={slide.IBU}
                  alcohol={slide.alcohol}
                  slideNumber={sliders.slideNumber}
                />
              );
            })}
        </div>
      </div>

      <button
        className="slider__arrows slider__arrows--prev"
        onClick={() => dispatch("PREV")}
      >
        <Arrow className="slider__arrows-svg" />
      </button>
      <button
        className="slider__arrows slider__arrows--next"
        onClick={() => dispatch("NEXT")}
      >
        <Arrow className="slider__arrows-svg" />
      </button>
    </div>
  );
};

export default Slider;
