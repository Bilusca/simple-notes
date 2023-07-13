import { createBrowserRouter } from 'react-router-dom'
import Root from './root'
import Notes from './notes'
import ImportantNotes from './importantNotes'
import NewNote from './newNote'
import Note from './note'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Notes />,
      },
      {
        path: '/important',
        element: <ImportantNotes />,
      },
      {
        path: '/new-note',
        element: <NewNote />,
      },
      {
        path: '/note/:noteId',
        element: <Note />,
      },
    ],
  },
])
