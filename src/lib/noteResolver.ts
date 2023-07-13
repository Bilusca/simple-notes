import * as z from 'zod'

export const noteResolver = z.object({
  title: z
    .string()
    .min(1, { message: 'Please, write a title' })
    .max(80, { message: 'Title must be less than 100 characters' }),
  content: z.string().min(10, {
    message: 'Please, write a content must be more than 10 caracters',
  }),
})

export type NoteFormData = z.infer<typeof noteResolver>
