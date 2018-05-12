import React, { Component } from "react";

const user = {
  email: "",
  logIn: () => null,
  logOut: () => null
};

const UserContext = React.createContext(user);

export const UserConsumer = UserContext.Consumer;

export class UserProvider extends Component {
  state = {
    email: user.email
  };

  logIn = () => {
    console.log("Logged In");
    this.setState({
      email: "s"
    });
  };

  logOut = () => {
    console.log("Logged out");
    this.setState({ email: "" });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          email: this.state.email,
          logIn: this.logIn,
          logOut: this.logOut
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
