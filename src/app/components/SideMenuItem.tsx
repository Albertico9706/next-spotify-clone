interface Props{
    icosrc?:string
    text:string
    href?:string
}


export default function SideMenuItem({icosrc="",text,href=""}:Props){
    return(
        <a 
        className="w-full h-10 flex rounded gap-1 items-center hover:bg-zinc-700 hover:text-orange-600 ps-2"
        href={href}>
            <div>Ico</div><span>{text}</span>
            
        </a>
    )
}