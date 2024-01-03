import { Song} from "@/lib/data"


export default function SongCard({song}:{song:Song}){
    const {artists,duration,title,id,image}=song
    return(
        <button className="  flex w-full border-b border-b-slate-400/60 gap-4 justify-between items-center p-2 text-sm  "> 
            <div className="flex gap-4 items-center">{id}
                <div className="w-8 h-8 border border-red-400"><img src={image} alt="" /></div>
                <div className="flex flex-col  items-start">
                    <p>{title}</p>
                    <p className="text-xs opacity-75">{artists}</p>
                </div>
            </div>
            <div>{duration}</div>
        </button>
    )
}