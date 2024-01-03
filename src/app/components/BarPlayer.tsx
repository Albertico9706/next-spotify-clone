import Player from "./Player";
import dotenv from "dotenv"

export default function BarPlayer(){
    const url_songs=process.env.SONG_STORE
    return (
        <>
            
               <div>Current Song </div>
               <div className="flex-1 grid place-content-center"><Player small={true} /></div>
               <div>Volume</div>
            
        </>
    )
}