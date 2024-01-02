import PlaylistCard from "../components/PlaylistCard"
import { playlists } from "@/lib/data"

export default function IdPlaylist({params:{id}}:{params:{id:string}}){
    const playlist=playlists.find(playli=>playli.id===id)
    return(
        <div className="grid place-content-center">
        {playlist && <PlaylistCard playlist={playlist}/>}  
        </div>
    )
}