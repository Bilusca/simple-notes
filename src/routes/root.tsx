import { Outlet } from 'react-router-dom'
import { Title } from '../components/Title'
import { Pencil, StickyNote } from 'lucide-react'
import { LinkButton } from '@/components/LinkButton'

export default function Root() {
  return (
    <div className="container">
      <main className="bg-white flex-1 rounded-xl border-4 border-black shadow-[5px_5px_0px_#000] flex flex-col md:flex-row px-0 h-[90vh] md:h-[80vh]">
        <aside className="w-full md:w-2/6 px-4 py-4 md:py-8 bg-gray-200 border-b-4 md:border-b-0 md:border-r-4 border-black rounded-t-xl md:rounded-t-none md:rounded-tl-xl md:rounded-bl-xl flex flex-col">
          <Title text="Notes!" />
          <nav className="flex flex-col flex-1 justify-between">
            <ul className="flex justify-between md:flex-col md:gap-4">
              <li>
                <LinkButton
                  icon={StickyNote}
                  to="/"
                  text="Notes"
                  className="hover:bg-emerald-100 data-[active=true]:bg-emerald-100"
                />
              </li>
              <li>
                <LinkButton
                  icon={StickyNote}
                  color="text-red-700"
                  to="/important"
                  text="Important notes"
                  className="hover:bg-red-100 data-[active=true]:bg-red-100"
                />
              </li>
            </ul>
            <div className="justify-self-end">
              <LinkButton
                icon={Pencil}
                className="hover:bg-indigo-200 data-[active=true]:bg-indigo-200 mt-2 md:mt-0"
                to="/new-note"
                text="New Note"
              />
            </div>
          </nav>
        </aside>
        <div className="overflow-hidden md:w-4/6 px-4 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
