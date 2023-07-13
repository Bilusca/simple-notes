import { NoteFormData, noteResolver } from '@/lib/noteResolver'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export function useNoteForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    watch,
    reset,
  } = useForm<NoteFormData>({
    resolver: zodResolver(noteResolver),
    mode: 'onBlur',
  })

  return { register, errors, handleSubmit, watch, reset, isSubmitting }
}
