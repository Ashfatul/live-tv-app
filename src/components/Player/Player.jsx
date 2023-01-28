import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Play from "../Play/Play";

const Player = () => {
  let tvID = useParams();
  tvID = tvID.tvID;

  const [videoSrc, setvideoSrc] = useState([]);
  useEffect(() => {
    fetch("https://iptv-org.github.io/api/streams.json")
      .then((res) => res.json())
      .then((videoData) => setvideoSrc(videoData))
      .catch((error) => console.error(error));
  }, []);

  let thisSource = useRef(0);
  let channelURL = useRef(0);

  useEffect(() => {
    videoSrc.map((data) => {
      if (data.channel === tvID) {
        thisSource.current = data;
        channelURL.current = data.url;
      }
    });
  }, [videoSrc]);

  return <Play url={channelURL.current} info={thisSource.current} />;
};

export default Player;
