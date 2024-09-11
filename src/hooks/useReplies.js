import { useEffect, useState } from "react"
import { replies_api } from "../utils/api";

const useReplies=(commentId)=>{
    const [replies,setReplies]=useState(null)
    useEffect(()=>{
      getReplies();
    },[])
    const getReplies=async()=>{
    try {
      const raw=await fetch(replies_api+commentId);
      const data=await raw.json();
      setReplies(data.items); 
    } catch (error) {
      console.log(error)
    }// Assuming the API response contains 'items' property with the replies
     
    }
     
    return replies
}
export default useReplies