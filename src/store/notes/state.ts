export type Note = {
  id: string
  title: string
  content: string
  isImportant: boolean
}

export interface Notes {
  notes: Note[]
}

export const initialNotesState: Note[] = []
