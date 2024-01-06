"use client"
import { useZustandStore } from "@/store/zustandSongs"


//TODO: set the song with a click for can play all the songs

export default function SetterSong({title,id}:{title:string,id:string}){
    const{currentMusic,setCurrentMusic}=useZustandStore(state=>state)

    const handleClick=()=>{
        setCurrentMusic(
            {
                song:(Number(currentMusic.playlist.id)-1),
                ...currentMusic
            }
        )
    }
    return(<button onClick={handleClick}>{title}</button>)
}