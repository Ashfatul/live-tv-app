import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../../res/placeholder.jpg";

const Channel = (props) => {
  const channel = props.channelData;
  const displayDefaultImg = (e) => {
    e.target.src = defaultImg;
  };
  return (
    <Link to={`/live-tv/${channel.id}`} className="single-tv-channel">
      <img
        src={channel.logo}
        onError={displayDefaultImg}
        className="channel-logo"
        alt={channel.name}
      />
      <p className="channel-name">{channel.name}</p>
      <small className="channel-id">@{channel.id}</small>
      <p>{channel.website}</p>
    </Link>
  );
};

export default Channel;
