import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export function TipTap({
  content,
  onChange,
}: {
  content: string
  onChange: (e: unknown) => void
}) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate({ editor }) {
      onChange(editor.getText())
    },
  })

  return (
    <EditorContent
      className="flex min-h-[200px] resize-y w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[error=true]:ring-red-600"
      editor={editor}
    />
  )
}
