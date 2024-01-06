"use client"

import SongCard from "./SongCard";
import { useZustandStore } from "@/store/zustandSongs";

export default function CurrentSong(){
    const{currentMusic}=useZustandStore(state=>state)
    return(
        <div className="h-full">
           {currentMusic.song && <SongCard song={currentMusic.song} current /> }
        </div>
    )
}