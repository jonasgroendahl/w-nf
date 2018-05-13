import React from "react";
import { Link } from "react-router-dom";
import Seperator from "../../components/Seperator/Seperator";

const signedup = () => {
  return (
    <div className="f-container">
      <h1 className="header">You're signed up!</h1>
      <Seperator />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea et
        inventore saepe tempora nisi reiciendis iure. Esse inventore fugit iste.
      </p>
      <Link className="btn" to="/">
        Start free trial
      </Link>
    </div>
  );
};

export default signedup;
