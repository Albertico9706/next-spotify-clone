"use client"

import { useEffect, useRef, useState } from "react"
import Play from "@/icons/Play"
import Pause from "@/icons/Pause"
import { useZustandStore } from "@/store/zustandSongs"
import { Playlist, Song, playlists, songs } from "@/lib/data"
import { names } from "@/lib/list_songs_url"


//TODO: fix the error of the null currentMusic at the start to play

export default function Player(){
    const audioref=useRef()
    const{isPlaying,setIsPlaying,currentMusic,setCurrentMusic}=useZustandStore(state=>state)
    useEffect(()=>{
        if(currentMusic.song){
        const songIndex=(Number(currentMusic.song.id)-1)+(currentMusic.playlist.albumId-1)*5
        const pathSong=`mp3/${names[songIndex]}`
        audioref.current.src=pathSong
        audioref.current.play()
        }
    },[currentMusic])

    useEffect(()=>{
    if(!isPlaying){
        audioref.current.pause()
    }
    },[isPlaying])
        
        
    const handleClick=()=>{  
       isPlaying
       ?audioref.current.pause()
       :audioref.current.play()
        setIsPlaying(!isPlaying)
    }
    
    return(
        <button className="rounded-full w-9 h-9 bg-white hover:bg-black hover:text-white  relative 
        dark:text-white dark:bg-orange-500 dark:hover:text-black dark:hover:bg-white transition duration-300" 
        onClick={handleClick}>
           <audio  ref={audioref}/>
            {isPlaying?  <Pause/>: <div className="grid items-center justify-center   "><Play/></div>}
            </button>
    )
}
        
            


//top-[2px] left-[2px]