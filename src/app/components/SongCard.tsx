import { Song} from "@/lib/data"
import SetterSong from "./SetterSong"


export default function SongCard({song,current=false}:{song:Song,current?:boolean}){
    const {artists,duration,title,id,image}=song
    const extend=current? "":"justify-between border-b border-b-slate-400/60 p-2"
    
    
    return(
        
        <button className={  `flex w-full  gap-4  items-center  text-sm ${extend}` } > 
            <div className="flex gap-4 items-center">{id}
                <div className="w-8 h-8 border border-red-400"><img src={image} alt="" /></div>
                <div className="flex flex-col  items-start">
                    <SetterSong title={title} id={id}/>
                    <p className="text-xs opacity-75">{artists}</p>
                </div>
            </div>
            <div>{duration}</div>
        </button>
    )
}