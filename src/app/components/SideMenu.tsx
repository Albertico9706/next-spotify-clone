import SideMenuItem from "./SideMenuItem";
import Home from "@/icons/Home";
import Search from "@/icons/Search";



export default function SideMenu(){
    return(
        <ul className="bg-orange-300 dark:bg-zinc-900 flex flex-col gap-2 p-2 rounded" >
            <li key={crypto.randomUUID()}><SideMenuItem ico={<Home/>}  text="Inicio" href="/"/></li>
            <li key={crypto.randomUUID()}><SideMenuItem ico={<Search/>}  text="Buscar"/></li>
        </ul>
    )
}
