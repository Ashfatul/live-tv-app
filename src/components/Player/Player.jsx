import React, { useEffect, useRef, useState } from "react";
import ReactHlsPlayer from "@ducanh2912/react-hls-player";
import { Link, useParams } from "react-router-dom";

const Player = () => {
  let tvID = useParams();
  tvID = tvID.tvID;
  const [thisVideo, setThisVideo] = useState();
  const [videoSrc, setvideoSrc] = useState([]);
  useEffect(() => {
    fetch("https://iptv-org.github.io/api/streams.json")
      .then((res) => res.json())
      .then((videoData) => {
        setThisVideo(videoData.find((video) => video.channel === tvID));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="player-container">
      {/* <h1 className="channel-name"></h1>
      <p className="channel-status">
        Live Status: <span className="status-style"></span>
      </p> */}
      <button className="back">
        <Link to={"/"}>Back To Home</Link>
      </button>
      <div className="video-container">
        {thisVideo !== undefined ? (
          <ReactHlsPlayer
            className="live-video"
            src={thisVideo.url}
            autoPlay={true}
            controls={true}
            width="100%"
            height="100%"
          />
        ) : (
          console.log("loading")
        )}
      </div>
    </div>
  );
};

export default Player;
