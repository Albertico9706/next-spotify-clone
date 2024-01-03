import PlaylistCard from "../components/PlaylistCard"
import { playlists } from "@/lib/data"
import TableSongs from "../components/TableSongs"

export default function IdPlaylist({params:{id}}:{params:{id:string}}){
    const playlist=playlists.find(playli=>playli.id===id)
    return(
        <><div className="grid place-content-center p-8 w-full shadow">
        {playlist && <PlaylistCard playlist={playlist}/>}  
        </div>
        {playlist?.albumId && <TableSongs albumId={playlist?.albumId}/>}</>
    )
}