import { useEffect, useState } from "react";
import { search_api } from "../utils/api";

const useSuggetions=(search)=>{
  const[data,setData]=useState(null)
   useEffect(()=>{
      getData();
   },[])

   const getData=async()=>{
          const raw=await fetch(search_api+search);
          const data=await raw.json();
          console.log(data);
          setData(data.items) ;
   }
  
    return data;   
}
export default useSuggetions