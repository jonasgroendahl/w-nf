import React, { Component } from "react";
import "./Classes.css";
import { FaSearch, FaStar } from "react-icons/lib/fa";
import { MdFilterList } from "react-icons/lib/md";
import Slider from "react-slick";
import IconFire from "react-icons/lib/md/whatshot";
import IconClock from "react-icons/lib/fa/clock-o";
import { UserConsumer } from "../../context/UserContext";
import Seperator from "../../components/Seperator/Seperator";
import { withRouter, Link } from "react-router-dom";

class Classes extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    const svgSize = {
      width: "25px",
      height: "25px"
    };

    return (
      <div className="cl-container">
        <UserConsumer>
          {context =>
            context.email != "" ? (
              <div className="cl-top-header">
                <h1 className="cl-title">on demand classes</h1>
                <FaSearch />
                <FaStar />
                <MdFilterList />
              </div>
            ) : (
              <div className="cl-top-header-not-logged-in">
                <h1 className="cl-title" style={{ marginRight: 0 }}>
                  hundreds of great classes
                </h1>
                <Seperator />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, esse!
                </p>
                <Link to="/signup" className="btn">
                  Sign up
                </Link>
              </div>
            )
          }
        </UserConsumer>
        <div className="cl-top-header-2">
          <h1 className="cl-subtitle">Featured</h1>
          <button className="btn">See all classes</button>
        </div>
        <Slider {...settings}>
          <div className="slide-item">
            <img src="http://placekitten.com/g/400/200" />
            <p>Cycling Sky Villa Las Vegas Pro II</p>
            <div onClick={() => this.props.history.push("/class/4")}>
              <IconFire style={svgSize} /> 44 <IconClock style={svgSize} />{" "}
              16:00
            </div>
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
          <div className="slide-item">
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div className="slide-item">
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
        <div className="cl-top-header-2">
          <h1 className="cl-subtitle">Collection Name</h1>
          <button className="btn">See all classes</button>
        </div>
        <Slider {...settings}>
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
          <div className="slide-item">
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div className="slide-item">
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
    );
  }
}
export default withRouter(Classes);
