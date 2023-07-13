import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Balancer } from 'react-wrap-balancer'

export default function ImportantNotes() {
  const notes = useSelector((state: RootState) =>
    state.notes.filter((note) => !!note.isImportant),
  )

  return (
    <section className="h-full overflow-y-auto">
      <div className="bg-white sticky top-0 pb-10">
        <h1 className="text-center">
          <Balancer className="font-chubbo text-4xl md:text-6xl">
            Important notes!
          </Balancer>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {notes.map((note) => (
          <Link to={`/note/${note.id}`} key={note.id} className="">
            <Card className="border-2 border-black transition-shadow lg:hover:shadow-[3px_3px_0px_#000] overflow-auto bg-red-100">
              <CardHeader>
                <CardTitle className="font-chubbo text-xl text-ellipsis overflow-hidden">
                  {note.title}
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
