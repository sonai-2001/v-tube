import React, { useEffect, useState } from "react";
import { formatToKOrMillion } from "../helper/functions";
import useReplies from "../hooks/useReplies";

const Comment = ({ detail,commentId }) => {
  console.log(detail);
  const [reply,setreply]=useState(null)
  
  const {
    textDisplay,
    authorDisplayName,
    authorProfileImageUrl,
    publishedAt,
    likeCount,
  } = detail;
  const replies=useReplies(commentId)

  useEffect(()=>{
      if(replies){
         setreply(replies)
      }
  },[replies])
  return (
   
   <div>
   <div className="flex w-full mb-2 items-center gap-3">
      <img
        className="w-[45px] h-[45px] rounded-full object-cover border"
        src={authorProfileImageUrl}
        alt="profile"
      />
      <div>
        <h3 className="flex gap-2">
          <p className="font-bold text-sm lg:text-lg">{authorDisplayName}</p>
          <span>2 days ago</span>
        </h3>
        <p className="text-xs lg:text-sm">
          {textDisplay}
        </p>
        <span>{formatToKOrMillion(Number(likeCount))} <i class="ri-thumb-up-fill"></i></span>
        </div>
        
    </div>
    {
        reply && reply.length>0 &&(
            <div className="ml-5 pl-3 mb-3 border-l-2 border-slate-400 ">
                <h3 className="text-sm font-bold">Replies</h3>
                {reply.map((r) => (
                    <Comment key={r.id} detail={r.snippet} commendId={r.id} />
                ))}
            </div>
        )
        
    }

    </div>
  );
};

export default Comment;
