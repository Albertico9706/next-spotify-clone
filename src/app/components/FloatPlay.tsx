"use client"

import { useEffect, useRef, useState } from "react";
import Player from "./Player";
import {names} from "@/lib/list_songs_url"
import {useZustandStore} from "@/store/zustandSongs"
import { playlists } from "@/lib/data";

export default function FloatPlay({id,albumId}:{id:string,albumId:number}){
   /*  const{isPlaying,currentMusic,setIsPlaying,setCurrentMusic}=useZustandStore(state=>state)
    const[currentSong,setCurrentSong]=useState
    
    const index_song=(albumId-1)*5+(id-1)
    const url_song=names[index_song]
    const pathSong=process.env.SongStore + url_song
    
    audioref.current.src=pathSong */
    const playlist=playlists.find(pl=>pl.albumId=albumId)
    return(
        <div className="absolute bottom-0 right-[15%] group-hover:-translate-y-12 transition duration-300 opacity-0 group-hover:opacity-100 ease-in-out"><Player playlist={playlist} /></div>
    )
}