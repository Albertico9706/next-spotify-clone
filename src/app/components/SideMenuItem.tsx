import Link from "next/link"

interface Props{
    ico?:React.ReactNode
    text:string
    href?:string
}

export default function SideMenuItem({ico=<></>,text,href=""}:Props){
    return(
        <Link 
        className="w-full h-10 flex rounded gap-1 items-center hover:bg-slate-300 hover:text-orange-700 
        ps-2 transition"
        href={href}>  
           {ico}<span>{text}</span>
        </Link>
    )
}