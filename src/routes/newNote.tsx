import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { setNote } from '@/store/notes/notesSlice'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useNoteForm } from '@/hooks/useNoteForm'
import { NoteFormData } from '@/lib/noteResolver'
import { Label } from '@radix-ui/react-label'
import MDEditor from '@uiw/react-md-editor'
import { useState } from 'react'
import { TipTap } from '@/components/TipTap'

export default function NewNote() {
  const { register, handleSubmit, errors, reset, isSubmitting } = useNoteForm()
  const [mdValue, setMdValue] = useState<string>('')

  const dispatch = useDispatch()

  function handleMdValue(e: unknown) {
    console.log(e)
    setMdValue(e as string)
  }

  function onSubmit(data: NoteFormData) {
    const { title, content } = data

    const note = {
      id: uuidv4(),
      title,
      content,
      isImportant: false,
    }

    dispatch(setNote(note))
    setMdValue('')
    reset()
  }

  function checkHasError(errors: unknown, property: string) {
    return Object.prototype.hasOwnProperty.call(errors, property)
  }

  return (
    <section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 md:px-20"
      >
        <div className="flex flex-col">
          <Label
            className="mb-3 text-lg font-semibold data-[error=true]:text-red-600"
            htmlFor="title"
            data-error={checkHasError(errors, 'title')}
          >
            Title of note
          </Label>
          <Input
            className="data-[error=true]:ring-red-600"
            {...register('title')}
            data-error={checkHasError(errors, 'title')}
          />
        </div>
        <div className="flex flex-col">
          <Label
            className="mb-3 text-lg font-semibold data-[error=true]:text-red-600 "
            htmlFor="content"
            data-error={checkHasError(errors, 'content')}
          >
            Content of note
          </Label>
          <TipTap content={mdValue} onChange={handleMdValue} />
          <Textarea
            className="hidden"
            {...register('content', { value: mdValue })}
          />
        </div>
        <Button
          type="submit"
          data-submitting={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Save Note'}
        </Button>
      </form>
    </section>
  )
}
