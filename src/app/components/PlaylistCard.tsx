import { Playlist } from "@/lib/data";
import Link from "next/link";
import Player from "./Player";
import FloatPlay from "./FloatPlay";

export default function PlaylistCard({playlist,anchor=false}:{playlist:Playlist,anchor?:boolean}){
    const{id,albumId,cover,title,artists,color}=playlist
    const href=`/${id}`
    return(
        <Link href={href}className="rounded w-40 h-40 border border-black flex flex-col items-center relative group" aria-disabled="true">
            <div className="w-28 h-28 border border-red-400"><img src={cover} className="h-full text-xs" alt={`Cover ${title}`} /></div>
            <div className="text-xs max-w-full">
                <p>{title}</p>
                <p>{artists}</p>
                <FloatPlay id={id} albumId={albumId}/>
            </div>
            
        </Link>
    )
}