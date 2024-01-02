import SideMenuItem from "./SideMenuItem";
import Home from "@/icons/Home";
import Search from "@/icons/Search";



export default function SideMenu(){
    return(
        <ul className="bg-slate-400 dark:bg-zinc-900 flex flex-col gap-2 p-2 rounded" >
            <li key={crypto.randomUUID()}><SideMenuItem ico={<Home/>}  text="Buscar"/></li>
            <li key={crypto.randomUUID()}><SideMenuItem ico={<Search/>}  text="Inicio"/></li>
        </ul>
    )
}
