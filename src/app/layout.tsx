import type { Metadata } from 'next'
import './globals.css'
import BarPlayer from './components/BarPlayer'
import SideMenu from './components/SideMenu'
import SideBibliary from './components/SIdeBlibliary'



export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className="[grid-template-areas:'aside_main'_'footer_footer'] bg-slate-200 dark:bg-black dark:text-white grid  h-screen  grid-rows-[1fr_auto] grid-cols-[minmax(150px,200px)_1fr]   gap-1">
        <aside className='[grid-area:aside] rounded-lg  flex flex-col gap-1 '>
          <SideMenu />
          <SideBibliary />
        </aside>
        <main className='[grid-area:main] bg-slate-400 dark:bg-zinc-900 rounded-lg'>
          {children}
        </main>
        <footer className='[grid-area:footer] bg-slate-400 dark:bg-zinc-900 rounded-lg w-full h-10 flex justify-between place-items-center px-4'>
          <BarPlayer />
        </footer>
        </body>
    </html>
  )
}