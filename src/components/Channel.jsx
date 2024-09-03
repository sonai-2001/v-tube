import React, { useEffect, useState } from "react";
import useChannel from "../hooks/useChannel";

const Channel = ({ channelId }) => {
  const channelDetail = useChannel(channelId);
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    if (channelDetail) {
      setDetail(channelDetail);
    }
  }, [channelDetail]);
  console.log(channelId);

  function formatToKOrMillion(value) {
    console.log(value);
    // Check if the value is in the millions
    if (value >= 1_000_000) {
      return (value / 1_000_000).toFixed(1) + "M";
    }
    // Check if the value is in the thousands
    else if (value >= 1_000) {
      return (value / 1_000).toFixed(1) + "K";
    }
    // Return the value as is if it's less than 1,000
    else {
      return value;
    }
  }

  if (detail === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center gap-2">
      <img
        className="w-[40px] h-[40px] border rounded-full object-cover "
        src={detail.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="">
        <h1 className="text-md font-semibold">{detail.snippet.title}</h1>
        <p className="text-xs">
          {formatToKOrMillion(Number(detail.statistics.subscriberCount))} Subscribers 
            
        </p>
      </div>
      
    </div>
  );
};

export default Channel;
