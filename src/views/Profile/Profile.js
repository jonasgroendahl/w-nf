import React, { Component } from "react";
import Seperator from "../../components/Seperator/Seperator";
import "./Profile.css";

export default class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="f-container">
          <h1 className="header">Profile</h1>
          <Seperator />
        </div>
        <div className="profile-info-box">
          <img
            src="https://www.empressuniverse.com/images/themes/empress/profile-img.jpg"
            className="profile-pic"
            style={{ height: "170px", position: "absolute", right: "50px" }}
          />
          <div className="profile-grid">
            <h2>First name</h2>
            <h2>Jane</h2>

            <h2>Last name</h2>
            <h2>Kek</h2>

            <h2>Gender</h2>
            <h2>Female</h2>

            <h2>Date of birth</h2>
            <h2>2013-02-22</h2>

            <h2>Height</h2>
            <h2>180cm</h2>

            <h2>Weight</h2>
            <h2>65kg</h2>
          </div>
          <p>Edit your profile on the app</p>
        </div>
      </React.Fragment>
    );
  }
}
