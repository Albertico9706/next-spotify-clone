"use client"

import Play from "@/icons/Play"
import Pause from "@/icons/Pause"
import { Playlist } from "@/lib/data"
import { useZustandStore } from "@/store/zustandSongs"
import { songs } from "@/lib/data"

export default function PlayerInCard({playlist}:{playlist?:Playlist}){
    
    


    const{isPlaying,setIsPlaying,currentMusic,setCurrentMusic}=useZustandStore(state=>state)
    
    const isPlayingThis=isPlaying&&currentMusic.playlist?.id==playlist?.id
        
    const handleClick=()=>{  
        if(!isPlayingThis){
        setCurrentMusic({
            playlist:playlist,
            song:songs[0],
            songs:songs})
        setIsPlaying(true) }
         else{
        setIsPlaying(!isPlaying)}
    }

    
    return(
        <button className={`w-12 h-12 absolute bottom-0 right-[15%] bg-green-600 rounded-full group-hover:-translate-y-12 transition duration-300 opacity-0 group-hover:opacity-100 ease-in-out`} onClick={handleClick}>
            {isPlayingThis?  <Pause/>: <div className="grid items-center justify-center   "><Play/></div>}
            </button>
    )
}