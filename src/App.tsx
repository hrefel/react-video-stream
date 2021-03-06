import React from "react";
import logo from "./logo.svg";
import "./App.css";
import videojs from "video.js";
import "video.js/dist/video-js.css";

interface VideoPlayerPropsInferface {
  videoJsOptions?: videojs.PlayerOptions;
}

export default class VideoPlayer extends React.Component<VideoPlayerPropsInferface, {}> {
  private player?: videojs.Player;
  private videoNode?: HTMLVideoElement;

  constructor(props: VideoPlayerPropsInferface) {
    super(props);
    this.player = null;
    this.videoNode = null;
  }

  componentDidMount() {

    // instantiate video.js
    this.player = videojs(this.videoNode, this.props.videoJsOptions).ready(function() {
      // console.log('onPlayerReady', this);
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }
  
  render() {
    return (
      <div className="c-player">
        <div className="c-player__screen" data-vjs-player="true">
          <video ref={(node: HTMLVideoElement) => this.videoNode = node} autoPlay={true} className="video-js" />
        </div>
      </div>
    );
  }

 
}