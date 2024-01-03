import { songs } from "@/lib/data";
import SongCard from "./SongCard";

export default function TableSongs({albumId}:{albumId:number}){
const songs_album=songs.filter((song)=>song.albumId==albumId)

    return(
        <div className="w-full p-8  flex flex-col gap-2">
            {songs_album.map((song)=><SongCard song={song}/>)}
        </div>
    )
}