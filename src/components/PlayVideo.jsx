import React from "react";
import { VIDEO_URL } from "../utils/api";
import Channel from "./Channel";

const PlayVideo = ({ detail }) => {
  console.log(detail);
  const { id, snippet, statistics } = detail?.items[0];
  const{title,channelId}=snippet;
  const{likeCount,viewCount}=statistics
  console.log(id);

  function formatToKOrMillion(value) {
    console.log(value)
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
        return value
    }
}

  return (
    <div>
     <iframe
  className="w-full h-[60vh]"
  src={`${VIDEO_URL + id}?autoplay=1&fs=1`}
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
{/* detail section */}
<div className="mt-3">
    <h1 className="font-bold text-xl">
      {title}
    </h1>
    <div className="flex mt-3 justify-between items-center">
       {/* channel details */}
       <Channel channelId={channelId}/>
   {/* video other details */}
     <div className="flex gap-2">
         <span>{formatToKOrMillion(Number(likeCount))} <i class="ri-thumb-up-fill"></i></span>
         <span>
         {formatToKOrMillion(Number(viewCount))} <i class="ri-eye-line"></i>
         </span>
     </div>
    </div>
</div>

    </div>
  );
};

export default PlayVideo;
