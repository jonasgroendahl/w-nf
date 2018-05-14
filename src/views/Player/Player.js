import React, { Component } from "react";
import "./Player.css";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import Player from "@vimeo/player";

export default class WexerPlayer extends Component {
  state = {
    progress: 0,
    showProgressBar: true
  };

  componentDidMount() {
    let index = 0;
    let player;
    const timer = setInterval(() => {
      index++;
      const { progress } = this.state;
      this.setState({ progress: progress + 2 });
      if (index === 50) {
        clearInterval(timer);
        player.play();
        this.setState({ showProgressBar: false });
      }
    }, 100);
    const iframe = document.querySelector("iframe");

    player = new Player(iframe, {
      id: 19231868,
      width: 640
    });
  }
  render() {
    return (
      <div className="player-bg">
        <div className="video-wrapper">
          <div className="video-spinner">
            {this.state.showProgressBar ? (
              <Progress percent={this.state.progress} type="circle" />
            ) : null}
          </div>
          <iframe
            src="https://player.vimeo.com/video/267790185"
            autoPlay
            preload="true"
            width="1920"
            height="1080"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}
