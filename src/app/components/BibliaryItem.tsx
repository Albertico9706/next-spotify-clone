import { Playlist } from "@/lib/data";

export default function BibliaryItem({playlist}:{playlist:Playlist}){
    const{id,albumId,artists,color,cover,title}=playlist
    return(
        <li key={albumId} className="flex flex-nowrap gap-4 text-xs hover:bg-slate-300 hover:text-orange-700 ps-2 rounded  w-full h-10 truncate">
            <img className="w-10 h-10 " src={cover} />
            <div className="">
                <div>{title}</div>
                <div>{artists}</div>
            </div>    
        </li>
    )
}