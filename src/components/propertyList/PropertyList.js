import React from 'react'
import "./propertyList.css";
import hotel from "../../assets/img/hotel.jpeg";
import apartment from "../../assets/img/apartment.jpeg";
import resort from "../../assets/img/resort.jpeg";
import villa from "../../assets/img/villa.jpeg";
function PropertyList() {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src={hotel} alt="" className="pListImg" />
        <div className="pListTitle">
          <h1>Hotels</h1>
          <p>942,665 hotels</p>
        </div>
      </div>
      <div className="pListItem">
        <img src={apartment} alt="" className="pListImg" />
        <div className="pListTitle">
          <h1>Apartments</h1>
          <p>977,737 apartments</p>
        </div>
      </div>
      <div className="pListItem">
        <img src={resort} alt="" className="pListImg" />
        <div className="pListTitle">
          <h1>Resorts</h1>
          <p>18,880 resorts</p>
        </div>
      </div>
      <div className="pListItem">
        <img src={villa} alt="" className="pListImg" />
        <div className="pListTitle">
          <h1>Villas</h1>
          <p>528,380 villas</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyList