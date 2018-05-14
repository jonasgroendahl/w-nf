import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import Router from "./components/Router/Router";
import { UserProvider } from "./context/UserContext";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    let layout = [];
    if (
      this.props.location.pathname !== "/" &&
      this.props.location.pathname !== "/profile"
    ) {
      layout = ["container"];
    }

    let fullscreen = false;
    if (this.props.location.pathname === "/player") {
      fullscreen = true;
    }

    return (
      <div className="App">
        <UserProvider>
          {!fullscreen ? (
            <React.Fragment>
              <Nav />
              <div className={layout.join(" ")}>
                <Router />
              </div>
            </React.Fragment>
          ) : (
            <Router />
          )}
        </UserProvider>
      </div>
    );
  }
}

export default withRouter(App);
