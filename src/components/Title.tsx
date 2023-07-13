export function Title({ text }: { text: string }) {
  const splitedTitle = text.toUpperCase().split('')
  const colors = [
    'text-green-500',
    'text-red-500',
    'text-blue-500',
    'text-orange-500',
    'text-purple-500',
    'text-emerald-500',
  ]

  return (
    <div className="mb-5 md:mb-10 text-center">
      {splitedTitle.map((letter, index) => {
        const deg = index % 2 === 0 ? 'rotate-12' : '-rotate-12'

        return (
          <span
            className={`font-chubbo text-4xl mb:text-6xl ${colors[index]} ${deg} inline-block mr-1 [text-shadow:3px_3px_0px_#000]`}
            key={letter}
          >
            {letter}
          </span>
        )
      })}
    </div>
  )
}
