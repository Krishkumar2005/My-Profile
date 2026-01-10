import { useState } from "react"
import { useEffect } from "react"
import { fetchHealthStatus } from "../services/api"

export default function HealthCheck(){
    const [healthStatus, setHealthStatus] = useState({})
    useEffect(()=>{
       fetchHealthStatus()
       .then(setHealthStatus) 
    },[])
    console.log("health ",healthStatus)
    return(
        <div>
            <h1>{healthStatus.message}</h1>
        </div>
    );
}