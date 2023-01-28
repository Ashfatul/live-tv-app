import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Channel from "../Channel/Channel";

const TVChannels = () => {
  const { countryCode } = useParams();
  const [channelList, setChannelList] = useState([]);
  useEffect(() => {
    fetch("https://iptv-org.github.io/api/channels.json")
      .then((res) => res.json())
      .then((channelList) => setChannelList(channelList))
      .catch((error) => console.log(error));
  }, []);

  let thisCountryChannels = [];

  channelList.find((country) => {
    if (country.country === countryCode) {
      thisCountryChannels = [...thisCountryChannels, country];
    }
  });

  return (
    <div className="channels-list-container">
      <h1 className="section-title">TV Channel List</h1>
      <button className="back">
        <Link to={"/"}>Back To Home</Link>
      </button>
      <div className="channel-container">
        {thisCountryChannels.map((thisChannel) => (
          <Channel channelData={thisChannel} key={thisChannel.id} />
        ))}
      </div>
    </div>
  );
};

export default TVChannels;
