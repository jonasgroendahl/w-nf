import React, { Component } from "react";
import { Link } from "react-router-dom";
import Seperator from "../../components/Seperator/Seperator";
import { UserConsumer } from "../../context/UserContext";
import { withRouter } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  login = c => {
    console.log(c);
    c.logIn();
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="login-wrapper">
        <h1 className="header">Login</h1>
        <Seperator />
        <input type="email" className="input block" placeholder="Email" />
        <input type="password" className="input block" placeholder="Password" />
        <Link to="/" style={{ alignSelf: "flex-end" }}>
          Forgot password
        </Link>
        <UserConsumer>
          {context => (
            <button className="btn block" onClick={() => this.login(context)}>
              Log in
            </button>
          )}
        </UserConsumer>
        <p>
          Dont have an account? <Link to="/signup">Sign up here.</Link>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          molestias cum possimus illum adipisci earum saepe numquam fuga.
          Aliquid consequuntur asperiores facilis, consectetur quidem mollitia
          porro accusamus nemo velit neque!
        </p>
        <Link to="/policy">Read our Terms of Use and Privacy policy</Link>
      </div>
    );
  }
}

export default withRouter(Login);
