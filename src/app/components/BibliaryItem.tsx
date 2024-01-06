import { Playlist } from "@/lib/data";
import Link from "next/link";

export default function BibliaryItem({playlist}:{playlist:Playlist}){
    const{id,albumId,artists,color,cover,title}=playlist
    return(
        <Link href={`/${albumId}`} key={albumId} className="flex  gap-4 text-xs hover:bg-slate-300 hover:text-orange-700 p-2 ps-2 rounded  w-full  ">
            <img className="w-10 h-10 " src={cover} />
            <div className="truncate">
                <div>{title}</div>
                <div>{artists}</div>
            </div>    
        </Link>
    )
}