import React from 'react'
import "./featured.css";
import haiphong from "../../assets/img/haiphong.jpg"
import halong from "../../assets/img/halong.jpg";
import catba from "../../assets/img/catba.jpg";
function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={haiphong} alt="vietnam" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Hai Phong</h1>
          <p>89 km away</p>
        </div>
      </div>
      <div className="featuredItem">
        <img src={halong} alt="vietnam" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Ha Long</h1>
          <p>128 km away</p>
        </div>
      </div>
      <div className="featuredItem">
        <img src={catba} alt="vietnam" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Cat Ba</h1>
          <p>129 km away</p>
        </div>
      </div>
    </div>
  );
}

export default Featured