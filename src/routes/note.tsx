import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { useParams } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { setNoteIsImportant } from '@/store/notes/notesSlice'

export default function Note() {
  const { noteId } = useParams()

  const note = useSelector((state: RootState) =>
    state.notes.find((note) => note.id === noteId),
  )
  const dispatch = useDispatch()

  function handleChecked(checked: boolean) {
    if (noteId) {
      dispatch(setNoteIsImportant({ id: noteId, isImportant: checked }))
    }
  }

  return (
    <section className="h-full overflow-y-auto">
      {note && (
        <>
          <div className="flex flex-col md:flex-row justify-between items-center mb-5 pb-3 border-b-2 border-black sticky top-0 bg-white">
            <h1 className="text-2xl mb-2 md:mb-0 md:text-4xl font-chubbo">
              {note.title}
            </h1>
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={note.isImportant}
                onCheckedChange={handleChecked}
                id="terms"
              />
              <Label htmlFor="terms">It&apos;s a important note?</Label>
            </div>
          </div>
          <Card className="border-2 border-gray-200 overflow-hidden pb-3">
            <CardContent className="py-3">
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => (
                    <h2 className="text-3xl font-chubbo mb-3" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="text-2xl font-chubbo mb-3" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3 className="text-xl font-chubbo mb-3" {...props} />
                  ),
                  h4: ({ node, ...props }) => (
                    <h4 className="text-lg font-chubbo mb-3" {...props} />
                  ),
                  p: ({ node, ...props }) => <p className="mb-3" {...props} />,
                }}
              >
                {note.content}
              </ReactMarkdown>
            </CardContent>
          </Card>
        </>
      )}
    </section>
  )
}
