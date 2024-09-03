import { useEffect, useState } from "react"
import { CHANNEL_API } from "../utils/api";

const useChannel=(id)=>{
    const [detail,setDetail]=useState(null)
     useEffect(()=>{
       getDetail();
     },[])

     const getDetail=async()=>{
        //make a request to the channel api
        //set the response to the detail state
        const raw=await fetch(CHANNEL_API+id);
        const data=await raw.json();
        console.log(data.items[0])
        setDetail(data.items[0])
     }
    return detail
}

export default useChannel