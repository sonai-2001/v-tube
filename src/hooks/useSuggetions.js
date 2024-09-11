import { useEffect, useState } from "react";
import { search_api } from "../utils/api";

const useSuggetions=(search)=>{
  const[data,setData]=useState(null)
   useEffect(()=>{
      getData();
   },[search])

   const getData=async()=>{
          try {
            const raw=await fetch(search_api+search);
          const data=await raw.json();
          console.log(data.nextPageToken);
          setData({
            items: data.items,
            nextPageToken: data.nextPageToken,
           
          }) ;
          } catch (error) {
            console.log(error)
          }
   }
  
    return data;   
}
export default useSuggetions