import PlaylistCard from "./PlaylistCard";
import { playlists } from "@/lib/data";

export default function ListPlaylist(){

    return(
        <div className="p-4 shadow-lg rounded truncate">
            <h1 className="text-3xl text-orange-600 " >Titulo de la lista</h1>
            <ul className=" flex gap-8 p-4 overflow-x-auto ">
                {playlists.map((playlist)=><PlaylistCard  playlist={playlist}/>)}
            </ul>
        </div>
    )
}