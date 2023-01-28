import React from "react";
import ReactHlsPlayer from "@ducanh2912/react-hls-player";
import { Link } from "react-router-dom";
const Play = (props) => {
  return (
    <div className="player-container">
      <h1 className="channel-name">{props.info.channel}</h1>
      <p className="channel-status">
        Live Status: <span className="status-style">{props.info.status}</span>
      </p>
      <button className="back">
        <Link to={"/"}>Back To Home</Link>
      </button>
      <div className="video-container">
        <ReactHlsPlayer
          className="live-video"
          src={props.url}
          autoPlay={true}
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Play;
