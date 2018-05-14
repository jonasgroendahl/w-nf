import React, { Component } from "react";
import Badge from "../../components/Badge/Badge";
import Seperator from "../../components/Seperator/Seperator";
import { Link } from "react-router-dom";
import "./Home.css";
import { UserConsumer } from "../../context/UserContext";
import Slider from "react-slick";
import profileImg from "../../assets/home.jpeg";
import IconFire from "react-icons/lib/md/whatshot";
import IconClock from "react-icons/lib/fa/clock-o";
import IconArrowRight from "react-icons/lib/md/keyboard-arrow-right";
import IconArrowLeft from "react-icons/lib/md/keyboard-arrow-left";

export default class Home extends Component {
  prev = () => {
    this.slider.slickNext();
  };

  next = () => {
    this.slider.slickPrev();
  };

  componentDidMount() {
    console.log(this);
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const settingsBottom = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    const settingsLoggedInMid = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false
    };

    const svgSize = {
      width: "40px",
      height: "40px",
      color: "var(--teal)",
      cursor: "pointer"
    };

    return (
      <div>
        <UserConsumer>
          {context =>
            context.email === "" ? (
              <React.Fragment>
                <div className="home-bg">
                  <h1 className="header">marketing tag line</h1>
                  <Seperator />
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum, eveniet.
                  </p>
                  <Link to="/signup" className="btn btn-teal">
                    Sign up
                  </Link>
                  <div style={{ alignSelf: "flex-end" }}>
                    <Badge />
                  </div>
                </div>
                <div className="home-mid-not-loggedin">
                  <h2
                    className="mr-auto"
                    style={{ textTransform: "uppercase" }}
                  >
                    Hundreds of great fitness classes
                  </h2>
                  <Link className="btn" to="/classes">
                    See all classes
                  </Link>
                </div>
                <div
                  className="home-slider-bottom"
                  style={{ background: "black", paddingBottom: "50px" }}
                >
                  <Slider {...settingsLoggedInMid}>
                    <div className="slide-item">
                      <img src="http://placekitten.com/g/400/200" />
                    </div>
                    <div className="slide-item">
                      <img src="http://placekitten.com/g/400/200" />
                    </div>
                    <div className="slide-item">
                      <img src="http://placekitten.com/g/400/200" />
                    </div>
                    <div className="slide-item">
                      <img src="http://placekitten.com/g/400/200" />
                    </div>
                  </Slider>
                </div>
                <div className="home-bg-2" />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="home-top-loggedin">
                  <h1 className="cl-title">featured</h1>
                  <Link to="/classes" className="btn">
                    See all classes
                  </Link>
                </div>
                <Slider {...settings} className="home-slider">
                  <div className="slide-item-home">
                    <div
                      style={{ backgroundImage: "url(" + profileImg + ")" }}
                    />
                    <div
                      className="f-container row featured-div"
                      onClick={() => this.props.history.push("/class/4")}
                    >
                      <div className="mr-auto">
                        <IconFire style={svgSize} /> 44{" "}
                        <IconClock style={svgSize} /> 16:00
                      </div>
                      <button className="btn btn-teal">Start</button>
                    </div>
                  </div>
                  <div className="slide-item-home">
                    <div
                      style={{ backgroundImage: "url(" + profileImg + ")" }}
                    />
                    <div
                      className="f-container row featured-div"
                      onClick={() => this.props.history.push("/class/4")}
                    >
                      <div className="mr-auto">
                        <IconFire style={svgSize} /> 44{" "}
                        <IconClock style={svgSize} /> 16:00
                      </div>
                      <button className="btn btn-teal">Start</button>
                    </div>
                  </div>
                </Slider>
                <div className="home-bottom-loggedin">
                  <h1 className="sub-header mr-auto">Recent activity</h1>
                  <div>
                    <IconArrowLeft style={svgSize} onClick={this.prev} />
                    <IconArrowRight style={svgSize} onClick={this.next} />
                  </div>
                </div>
                <div
                  className="home-slider-bottom"
                  style={{ marginBottom: "50px" }}
                >
                  <Slider
                    ref={slider => (this.slider = slider)}
                    {...settingsBottom}
                  >
                    <div className="slide-item">
                      <img src="http://placekitten.com/g/400/200" />
                    </div>
                    <div className="slide-item">
                      <img src="http://placekitten.com/g/400/200" />
                    </div>
                    <div className="slide-item">
                      <img src="http://placekitten.com/g/400/200" />
                    </div>
                    <div className="slide-item">
                      <img src="http://placekitten.com/g/400/200" />
                    </div>
                  </Slider>
                </div>
              </React.Fragment>
            )
          }
        </UserConsumer>
      </div>
    );
  }
}
