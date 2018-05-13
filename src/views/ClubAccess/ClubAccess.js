import React from "react";
import Seperator from "../../components/Seperator/Seperator";
import { Link } from "react-router-dom";
import "./ClubAccess.css";
import accessImg from "../../assets/access.jpg";

const clubaccess = () => {
  return (
    <React.Fragment>
      <div className="f-container">
        <h1 className="header">club access</h1>
        <Seperator />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, a.</p>
        <Link to="/signup" className="btn btn-teal">
          Sign up
        </Link>
      </div>
      <img src={accessImg} className="access-img" />
    </React.Fragment>
  );
};

export default clubaccess;
