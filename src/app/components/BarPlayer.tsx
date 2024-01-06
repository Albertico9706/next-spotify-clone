import CurrentSong from "./CurrentSong";
import Player from "./Player";

export default function BarPlayer(){
    return (
        <>
            
               <div className="w-1/3"><CurrentSong /> </div>
               <div className="w-1/3 flex-1 grid place-content-center"><Player /></div>
               <div className="w-1/3 flex place-content-end"> <span>Volume</span></div>
            
        </>
    )
}