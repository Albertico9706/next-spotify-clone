import { Playlist } from "@/lib/data";

export default function PlaylistCard({playlist}:{playlist:Playlist}){
    const{id,albumId,cover,title,artists,color}=playlist
    return(
        <a href={`/${id}`} className="rounded w-28 h-28 ">
            <img src={cover} alt={`Cover ${title}`} />
            <div className="text-xs">
                <p>{title}</p>
                <p>{artists}</p>
            </div>
        </a>
    )
}