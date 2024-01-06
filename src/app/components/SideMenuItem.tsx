import Link from "next/link"

interface Props{
    ico?:React.ReactNode
    text:string
    href?:string
}

export default function SideMenuItem({ico=<></>,text,href=""}:Props){
    return(
        <Link 
        className="w-full h-10 flex rounded gap-1 items-center hover:bg-zinc-400 hover:text-orange-100 dark:hover:bg-zinc-700 dark:hover:text-orange-600 ps-2"
        href={href}>  
           {ico}<span>{text}</span>
        </Link>
    )
}