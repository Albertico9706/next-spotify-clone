import PlaylistCard from "./PlaylistCard";

export default function ListPlaylist({rep}:{rep:number}){
    const listPlaylists:string[]=[]
    for (let i=0;i<rep;i++){
        listPlaylists.push("")
    }
    return(
        <div className="p-4 shadow-lg rounded">
            <h1 className="text-3xl text-orange-600 " >Titulo de la lista</h1>
            <ul className=" flex gap-8 p-4 overflow-x-auto max-w-2xl">
                
                {listPlaylists.map((i)=><li><PlaylistCard key={crypto.randomUUID()}/></li>)}
                
                {/* <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>                
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li>
                <li><PlaylistCard /></li> */}
            </ul>
        </div>
    )
}