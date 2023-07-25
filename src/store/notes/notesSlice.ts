import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Note, initialNotesState } from './state'

const notesSlice = createSlice({
  name: 'notes',
  initialState: initialNotesState,
  reducers: {
    setNote: (state, action: PayloadAction<Note>) => {
      state = [...state, action.payload]

      return state
    },
    setNoteIsImportant: (
      state,
      action: PayloadAction<{ id: string; isImportant: boolean }>,
    ) => {
      state = state.map((note) => {
        if (note.id === action.payload.id) {
          return {
            ...note,
            isImportant: action.payload.isImportant,
          }
        }

        return note
      })

      return state
    },
    deleteNote: (state, action: PayloadAction<{ id: string }>) => {
      state = state.filter((note) => note.id !== action.payload.id)

      return state
    },
  },
})

export const { setNote, setNoteIsImportant, deleteNote } = notesSlice.actions
export default notesSlice.reducer
