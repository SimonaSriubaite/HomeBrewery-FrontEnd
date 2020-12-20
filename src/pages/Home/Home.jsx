import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <figure className="home__figure">
        <img
          className="home__figure-img"
          src="https://pas-wordpress-media.s3.amazonaws.com/content/uploads/2016/02/14082719/how-to-start-a-brewery.jpg"
          alt="Home Brewery Hero."
        />
      </figure>
      <div className="home__section">
        <section className="home__section-about">
          <div>
            <h1 className="home__section-about--title">Home Brewery</h1>
            <p className="home__section-about--paragraph">
              Ever dreamed about crafting your own small-batch beers? This home
              brewers community site is for everybody, who loves beer: from
              beginners making their first brew to the seasoned home brewer
              taking their practice to the next level.
            </p>
          </div>
        </section>
        <figure className="home__section-figure">
          <img
            className="home__section-figure--img"
            src="https://ugc.futurelearn.com/uploads/images/4b/f8/4bf85d37-2882-4c19-859d-3a08330b60e6.jpg"
            alt="Glass with beer."
          />
        </figure>
      </div>
    </div>
  );
}

export default Home;
