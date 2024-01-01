export default function BibliaryItem(){
    return(
        <li className=" flex gap-4 text-sm hover:bg-slate-300 hover:text-orange-700 ps-2 rounded">
            <div className="w-12 h-12 bg-slate-200 ">Image</div>
            <div>
                <div>Title</div>
                <div>Autor</div>
            </div>    
        </li>
    )
}