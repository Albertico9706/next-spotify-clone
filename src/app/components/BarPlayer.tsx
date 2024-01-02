import Player from "./Player";

export default function BarPlayer(){
    return (
        <>
            
               <div>Current Song </div>
               <div className="flex-1 grid place-content-center"><Player /></div>
               <div>Volume</div>
            
        </>
    )
}