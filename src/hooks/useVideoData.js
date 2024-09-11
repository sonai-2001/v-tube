import { useEffect, useState } from "react";
import { SINGLE_VIDEO_API } from "../utils/api";

const useVideoData=(videoId)=>{
  const [details,setDetails]=useState(null)
   useEffect(()=>{
        getDetails();
   },[videoId])

   const getDetails=async()=>{
      try {
        const api=SINGLE_VIDEO_API+videoId;
        const raw= await fetch(api);
        const data=await raw.json();
        console.log(data);
        setDetails(data);
      } catch (error) {
        console.log(error)
      }
   }
   
    return details;
}
export default useVideoData;