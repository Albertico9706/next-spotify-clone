import SideMenuItem from "./SideMenuItem";

export default function SideMenu(){
    return(
        <ul className="bg-slate-400 dark:bg-zinc-900 flex flex-col gap-2 p-2 rounded" >
            <li><SideMenuItem key={crypto.randomUUID()} text="Inicio"/></li>
            <li><SideMenuItem key={crypto.randomUUID()} text="Buscar"/></li>
        </ul>
    )
}
