import { useEffect, useState } from "react";

export const TodoDate = () => {
        const[datetime, setDatetime] = useState("");


    useEffect (() => {
     const interval =  setInterval(() =>{
     const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    setDatetime(`${formattedDate} - ${formattedTime}`);
   }, 1000 )

   return () => clearInterval(interval);

}, []);

    return <h2 className="date-time">{datetime}</h2>
}