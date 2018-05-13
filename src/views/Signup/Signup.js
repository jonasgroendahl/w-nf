import React, { Component } from "react";
import { Link } from "react-router-dom";
import Seperator from "../../components/Seperator/Seperator";

export default class Signup extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <h1 className="header">Signup</h1>
        <Seperator />
        <input
          type="text"
          className="input block"
          placeholder="First Name"
          style={{ marginTop: "70px" }}
        />
        <input type="text" className="input block" placeholder="Last Name" />
        <input type="email" className="input block" placeholder="Email" />
        <input type="password" className="input block" placeholder="Password" />
        <Link className="btn block" to="/signedup">
          Sign up
        </Link>
        <p>
          Already have an account? <Link to="/login">Log in here.</Link>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          molestias cum possimus illum adipisci earum saepe numquam fuga.
          Aliquid consequuntur asperiores facilis, consectetur quidem mollitia
          porro accusamus nemo velit neque!
        </p>
      </div>
    );
  }
}
