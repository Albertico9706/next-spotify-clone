import PlaylistCard from "./PlaylistCard";
import { playlists } from "@/lib/data";

export default function ListPlaylist({rep}:{rep:number}){
    
    const listPlaylists:string[]=[]
    for (let i=0;i<rep;i++){
        listPlaylists.push("")
    }


    return(
        <div className="p-4 shadow-lg rounded">
            <h1 className="text-3xl text-orange-600 " >Titulo de la lista</h1>
            <ul className=" flex gap-8 p-4 overflow-x-auto ">
                
                {playlists.map((playlist)=><li key={crypto.randomUUID()}><PlaylistCard  playlist={playlist}/></li>)}
                
                {/* <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>                
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li> */}
            </ul>
        </div>
    )
}