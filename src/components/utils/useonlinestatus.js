import { useEffect,useState } from "react"


const useonlinestatus=()=>{

  const[onlinestatus,setonlinestatus]=useState(true)

  useEffect(()=>{
      window.addEventListener("online",()=>{
            setonlinestatus(true)
      }),
      window.addEventListener("offline",()=>{
            setonlinestatus(false)
      })
  },[])

  // boolean value 
  return onlinestatus;

}

export default useonlinestatus;