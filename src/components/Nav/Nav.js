import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/lib/fa";
import { UserConsumer } from "../../context/UserContext";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-content">
          <Link to="/">
            <img
              src="https://i.imgur.com/Hdro5J1.png"
              style={{ height: "40px" }}
            />
            <p className="nav-subtitle">ON DEMAND</p>
          </Link>
          <UserConsumer>
            {context => (
              <React.Fragment>
                {context.email === "" ? (
                  <React.Fragment>
                    <Link to="/classes">Classes</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/plans">Transformation plans</Link>
                    <Link to="/access">Club Access</Link>
                    <Link className="btn" to="/login">
                      Log in
                    </Link>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Link to="/">Dashboard</Link>
                    <Link to="/classes">Classes</Link>
                    <Link to="/plans">Transformation plans</Link>
                    <Link to="/profile">Profile</Link>
                    <img
                      src="https://www.empressuniverse.com/images/themes/empress/profile-img.jpg"
                      className="profile-pic"
                      onClick={context.logOut}
                    />
                  </React.Fragment>
                )}
              </React.Fragment>
            )}
          </UserConsumer>
          <FaBars className="mobile-menu" />
        </div>
      </nav>
    );
  }
}
