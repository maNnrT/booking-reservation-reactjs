import React from 'react'
import "./featuredProperties.css";
import featuredProperties1 from "../../assets/img/featuredProperties1.jpeg";
import featuredProperties2 from "../../assets/img/featuredProperties2.jpeg";
import featuredProperties3 from "../../assets/img/featuredProperties3.jpeg";
import featuredProperties4 from "../../assets/img/featuredProperties4.jpeg";
function FeaturedProperties() {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src={featuredProperties1} alt="" className="fpImg" />
        <span className="fpName">
          6 Continents Apartments by Prague Residences
        </span>
        <span className="fpCity">Prague1, Czech Republic, Prague</span>
        <span className="fpPrice">
          Starting from <strong>VND 1,392,038</strong>
        </span>
        <span className="fpRate">
          <button>8.3</button>
          <span>Very Good 250 reviews</span>
        </span>
      </div>
      <div className="fpItem">
        <img src={featuredProperties2} alt="" className="fpImg" />
        <span className="fpName">Villa Domina</span>
        <span className="fpCity">Split City Center, Croatia, Split</span>
        <span className="fpPrice">
          Starting from <strong>VND 1,133,787</strong>
        </span>
        <span className="fpRate">
          <button>9.4</button>
          <span>Wonderful 1,038 reviews</span>
        </span>
      </div>
      <div className="fpItem">
        <img src={featuredProperties3} alt="" className="fpImg" />
        <span className="fpName">7Seasons Apartments Budapest</span>
        <span className="fpCity">06. Terézváros, Hungary, Budapest</span>
        <span className="fpPrice">
          Starting from <strong>VND 2,297,808</strong>
        </span>
        <span className="fpRate">
          <button>8.8</button>
          <span>Excellent 7,273 reviews</span>
        </span>
      </div>
      <div className="fpItem">
        <img src={featuredProperties4} alt="" className="fpImg" />
        <span className="fpName">Oriente Palace Apartments</span>
        <span className="fpCity">Madrid City Center, Spain, Madrid</span>
        <span className="fpPrice">
          Starting from <strong>VND 2,438,901</strong>
        </span>
        <span className="fpRate">
          <button>8.9</button>
          <span>Excellent 2,553 reviews</span>
        </span>
      </div>
    </div>
  );
}

export default FeaturedProperties