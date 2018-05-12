import React, { Component } from "react";
import Badge from "./components/Badge/Badge";
import Nav from "./components/Nav/Nav";
import Router from "./components/Router/Router";
import { UserProvider } from "./context/UserContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider>
          <Nav />
          <div className="container">
            <Router />
          </div>
          <Badge />
          <Badge />
          <Badge />
        </UserProvider>
      </div>
    );
  }
}

export default App;
