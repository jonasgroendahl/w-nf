import React from "react";
import { Switch, Route } from "react-router-dom";
import Classes from "../../views/Classes/Classes";
import Login from "../../views/Login/Login";
import Signup from "../../views/Signup/Signup";
import Policy from "../../views/Policy/Policy";

const router = () => {
  return (
    <Switch>
      <Route path="/" exact />
      <Route path="/classes" exact component={Classes} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/policy" exact component={Policy} />
    </Switch>
  );
};

export default router;
