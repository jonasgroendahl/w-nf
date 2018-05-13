import React, { Component } from "react";
import Badge from "../../components/Badge/Badge";
import Seperator from "../../components/Seperator/Seperator";
import { Link } from "react-router-dom";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-bg">
          <h1 className="header">marketing tag line</h1>
          <Seperator />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            eveniet.
          </p>
          <Link to="/signup" className="btn btn-teal">
            Sign up
          </Link>
          <div style={{ alignSelf: "flex-end" }}>
            <Badge />
          </div>
        </div>
      </div>
    );
  }
}
