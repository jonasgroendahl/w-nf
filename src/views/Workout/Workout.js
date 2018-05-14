import React, { Component } from "react";
import "./Workout.css";
import Seperator from "../../components/Seperator/Seperator";
import classImg from "../../assets/class.png";
import IconFire from "react-icons/lib/md/whatshot";
import IconClock from "react-icons/lib/fa/clock-o";
import { withRouter, Link } from "react-router-dom";
import { UserConsumer } from "../../context/UserContext";

class Workout extends Component {
  render() {
    const svgSize = {
      width: "35px",
      height: "35px",
      color: "var(--teal)"
    };

    return (
      <React.Fragment>
        <UserConsumer>
          {context => (
            <div className="f-container">
              <h1 className="header">class name</h1>
              <Seperator />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
                distinctio.
              </p>
              {context.email === "" ? (
                <Link to="/signup" className="btn btn-teal">
                  Sign up
                </Link>
              ) : null}
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <img
                  style={{ marginTop: "20px", width: "100%" }}
                  src={classImg}
                />
                <div className="workout-info">
                  {context.email === "" ? (
                    <React.Fragment>
                      <div style={{ justifyContent: "space-between" }}>
                        <IconFire style={svgSize} />
                        --
                        <IconClock style={svgSize} />
                        49
                      </div>
                      <p>
                        <span className="text--teal">Sign up</span> to calculate
                        your personal calorie burn
                      </p>
                    </React.Fragment>
                  ) : (
                    <div style={{ marginRight: "auto" }}>
                      <IconFire style={svgSize} />
                      489
                      <IconClock style={svgSize} />
                      49
                    </div>
                  )}
                  <button
                    className="btn btn-teal"
                    onClick={() => this.props.history.push("/player")}
                  >
                    Start
                  </button>
                </div>
              </div>
            </div>
          )}
        </UserConsumer>
      </React.Fragment>
    );
  }
}

export default withRouter(Workout);
