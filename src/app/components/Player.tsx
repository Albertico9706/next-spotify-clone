"use client"

import { useEffect, useRef, useState } from "react"
import Play from "@/icons/Play"
import Pause from "@/icons/Pause"
import { useZustandStore } from "@/store/zustandSongs"
import { Playlist, Song } from "@/lib/data"

//TODO: fix the error of the null currentMusic at the start to play

export default function Player({small=false ,playlist}:{small?:boolean,playlist?:Playlist}){
    
    const size=small? "w-9 h-9 bg-white hover:bg-orange-300":"w-14 h-14 bg-green-500 z-10"
    const audioref=useRef()
    const{isPlaying,setIsPlaying,currentMusic,setCurrentMusic}=useZustandStore(state=>state)
    useEffect(()=>{
       
        audioref.current.src=`/mp3/001.mp3`
    },[])

    const handleClick=()=>{
        
        if(isPlaying){
            audioref.current.pause()
        }else{
            setCurrentMusic(
                {playlist}
            )
            audioref.current.play()
        }
        setIsPlaying(!isPlaying)
    }

    const playingThis=small
        ? false
        : isPlaying&&currentMusic.playlist.id===playlist.id

    return(
        <button className={` rounded-full ${size} transition relative`} onClick={handleClick}>
            <audio  ref={audioref}/>
            {playingThis?  <Pause/>: <div className="grid items-center justify-center   "><Play/></div>}
            </button>
    )
}

//top-[2px] left-[2px]