import moment from "moment";
import React from "react";

const Vcard = ({ details }) => {
  const { url } = details.snippet.thumbnails.standard;
  const { channelTitle,title,publishedAt } = details.snippet;
  const { viewCount } = details.statistics;
//ok
  function formatDateAndAgo(date) {
    // Format the date to display the day (e.g., "Monday")
    const day = moment(date).format('dddd');
    
    // Calculate how long ago the date was from today (e.g., "2 days ago")
    const ago = moment(date).fromNow();
    return ago
  }

  function formatToKOrMillion(value) {
    // Check if the value is in the millions
    if (value >= 1_000_000) {
        return (value / 1_000_000).toFixed(1) + 'M';
    }
    // Check if the value is in the thousands
    else if (value >= 1_000) {
        return (value / 1_000).toFixed(1) + 'K';
    }
    // Return the value as is if it's less than 1,000
    else {
        return value.toString();
    }
}




    

  return (
    <div className=" w-[300px] lg:w-[25vw] mb-3 h-[350px] lg:h-[48vh] border rounded-md overflow-hidden shadow-xl">
      <div className="w-full h-[65%] ">
      <img
        className="w-full h-full object-cover"
        src={url}
        alt="pic"
      />

      </div>

      <div className="p-2">
        <p className="tracking-tight leading-5 font-semibold">
          {title.substring(0,70)}{title.length>70?"....":""}
        </p>
        <h3 className="font-light text-sm">{channelTitle}</h3>
        <div className="w-full ">
          {formatToKOrMillion(viewCount)} views <span className="font-bold">.</span> {formatDateAndAgo(publishedAt)}
        </div>
      </div>
    </div>
  );
};

export default Vcard;
