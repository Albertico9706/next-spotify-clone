"use client"

import { useState } from "react"
import Play from "@/icons/Play"
import Pause from "@/icons/Pause"

export default function Player(){
    const [isPlaying,setIsplaying]=useState(true)
    const handleClick=()=>{
        setIsplaying(!isPlaying)
    }

    return(
        <button className="bg-white hover:bg-orange-300 rounded-full  w-9 h-9 transition" onClick={handleClick}>{isPlaying? <Play/> : <Pause/>}</button>
    )
}