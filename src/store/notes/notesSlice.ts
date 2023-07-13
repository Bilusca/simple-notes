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
      console.log('cai aqui set')
      state = state.map((note) => {
        if (note.id === action.payload.id) {
          return {
            ...note,
            isImportant: action.payload.isImportant,
          }
        }

        return note
      })

      console.log(state)

      return state
    },
  },
})

export const { setNote, setNoteIsImportant } = notesSlice.actions
export default notesSlice.reducer
