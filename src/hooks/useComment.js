import { useEffect, useState } from "react";
import { comment_api } from "../utils/api";

const useComment=(videoId)=>{
   const[data,setData]=useState(null)
   useEffect(()=>{
     getData();
   },[])
   
   const getData = async () => {
    try {
      const raw = await fetch(comment_api + videoId);
      const comments = await raw.json();
      console.log("API Response:", comments); // Check this log
      
      if (comments && comments.items) {
        const obj = {
          items: comments.items,
          nextPageToken: comments.nextPageToken,
        };
        console.log("Parsed Data:", obj); // Check this log
        setData(obj);
      } else {
        console.log("No items found in the API response");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
   console.log(data)
    return data;
}
export default useComment