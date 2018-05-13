import React, { Component } from "react";
import "./Player.css";

export default class Player extends Component {
  render() {
    return (
      <div className="player-bg">
        <div className="video-wrapper">
          <iframe
            src="https://player.vimeo.com/video/267790185"
            autoplay
            preload="true"
            width="1920"
            height="1080"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen="true"
          />
        </div>
      </div>
    );
  }
}
