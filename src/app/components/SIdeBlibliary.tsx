import BibliaryItem from "./BibliaryItem";

export default function SideBibliary(){
    return(
        <ul className="bg-slate-400 dark:bg-zinc-900 flex flex-col gap-1 rounded p-2  flex-1">
            <BibliaryItem key={crypto.randomUUID()} />
            <BibliaryItem key={crypto.randomUUID()} />
            <BibliaryItem key={crypto.randomUUID()} />
            <BibliaryItem key={crypto.randomUUID()} />
            <BibliaryItem key={crypto.randomUUID()} />
            <BibliaryItem key={crypto.randomUUID()} />
        </ul>
    )
}