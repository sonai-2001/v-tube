import moment from "moment";
import React from "react";
import formatDateAndAgo from "../helper/FormatDayAgo";
import { formatToKOrMillion } from "../helper/functions";

const Vcard = ({ details,sug }) => {
  const { url } = details.snippet.thumbnails.medium;
  const { channelTitle, title, publishedAt } = details.snippet;
  
  if(details.statistics){

    var { viewCount } =   details.statistics;
  }
  return (
    <div className={ `${sug?"w-full  flex items-center gap-1 h-[30%]":"w-[300px] lg:w-[25vw] lg:h-[48vh] h-[350px] "}  mb-3  border rounded-md overflow-hidden shadow-xl`}>
      <div className={`${sug?"w-[50%] h-full":"w-full h-[65%]"} `}>
        <img className="w-full h-full object-cover" src={url} alt="pic" />
      </div>

      <div className={`${sug?"w-[50%] p-[2px]":"p-2"}`}>
        <p className="tracking-tight leading-5 font-semibold">
          {title.substring(0, 70)}
          {title.length > 70 ? "...." : ""}
        </p>
        <div className={`${sug?"mt-3":""}`}>
        <h3 className="font-light text-sm">{channelTitle}</h3>
        {viewCount && <div className="w-full ">
          {formatToKOrMillion(viewCount)} views{" "}
          <span className="font-bold">.</span> {formatDateAndAgo(publishedAt)}
        </div>}
        </div>
      </div>
    </div>
  );
};

export default Vcard;
