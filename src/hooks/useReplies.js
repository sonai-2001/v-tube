import { useEffect, useState } from "react"
import { replies_api } from "../utils/api";

const useReplies=(commentId)=>{
    const [replies,setReplies]=useState(null)
    useEffect(()=>{
      getReplies();
    },[])
    const getReplies=async()=>{
     const raw=await fetch(replies_api+commentId);
     const data=await raw.json();
     setReplies(data.items); // Assuming the API response contains 'items' property with the replies
     
    }
     
    return replies
}
export default useReplies