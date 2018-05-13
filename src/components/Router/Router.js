import React from "react";
import { Switch, Route } from "react-router-dom";
import Classes from "../../views/Classes/Classes";
import Login from "../../views/Login/Login";
import Signup from "../../views/Signup/Signup";
import Policy from "../../views/Policy/Policy";
import Home from "../../views/Home/Home";
import Workout from "../../views/Workout/Workout";
import Player from "../../views/Player/Player";
import signedup from "../../views/SignedUp/SignedUp";
import Profile from "../../views/Profile/Profile";
import clubaccess from "../../views/ClubAccess/ClubAccess";

const router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/classes" exact component={Classes} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/policy" exact component={Policy} />
      <Route path="/class/:id" component={Workout} />
      <Route path="/player" component={Player} />
      <Route path="/signedup" component={signedup} />
      <Route path="/profile" component={Profile} />
      <Route path="/access" component={clubaccess} />
    </Switch>
  );
};

export default router;
