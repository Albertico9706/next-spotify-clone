import Library from "@/icons/Library";
import BibliaryItem from "./BibliaryItem";
import { playlists } from "@/lib/data";
export default function SideBibliary(){
    return(
        <ul className="bg-orange-300 dark:bg-zinc-900 flex flex-col  rounded p-2  flex-1">
            <div className="flex gap-4 pb-4 px-2 truncate"><Library /> Tu Bilblioteca </div>
            {playlists.map((playlist)=><BibliaryItem key={crypto.randomUUID()} playlist={playlist}/>  )}         
            
        </ul>
    )
}