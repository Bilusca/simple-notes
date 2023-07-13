import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Balancer } from 'react-wrap-balancer'

export default function Notes() {
  const notes = useSelector((state: RootState) => state.notes)

  return (
    <section className="h-full overflow-y-auto">
      <div className="bg-white sticky top-0 pb-10">
        <h1 className="text-center">
          <Balancer className="font-chubbo text-4xl md:text-6xl">
            Your notes!
          </Balancer>
        </h1>
      </div>
      <ul className="flex flex-col md:flex-row md:flex-wrap md:grid-cols-3 pb-3 gap-3">
        {notes.map((note) => (
          <li key={note.id}>
            <Link to={`/note/${note.id}`}>
              <Card
                className="border-2 border-black transition-shadow lg:hover:shadow-[3px_3px_0px_#000] data-[important=true]:bg-red-100 md:max-w-xs"
                data-important={note.isImportant}
              >
                <CardHeader>
                  <CardTitle className="font-chubbo text-xl text-ellipsis overflow-hidden whitespace-nowrap">
                    {note.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
