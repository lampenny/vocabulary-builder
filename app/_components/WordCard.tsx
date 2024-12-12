import React, { FC, useState } from "react"
import { EyeSlashIcon, TrashIcon } from "@heroicons/react/24/outline"

interface Vocab {
  japanese: string | null
  furigana: string | null
  meaning: string | null
}

interface WordCardProps {
  vocab: Vocab
  handleDelete: (word: string) => void
}

export const WordCard: FC<WordCardProps> = ({ vocab, handleDelete }) => {
  const [hint, setHint] = useState(true)

  return (
    <div className="animate ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 border border-dashed rounded-xl p-4 border-yellow-600">
      <p className="font-light text-xl">
        {vocab.japanese}
        <span className="text-sm text-gray-500 pl-3">
          {hint ? vocab.furigana : ""}
        </span>
      </p>
      <p
        className={`font-light ${hint ? "cursor-pointer text-orange-100 hover:text-black" : "text-orange-100 select-none"}`}
      >
        {vocab.meaning}
      </p>

      <div className="flex flex-row justify-between">
        <button className="text-xs" onClick={() => setHint((prev) => !prev)}>
          <EyeSlashIcon className="h-6 w-6 text-gray-500" />
        </button>

        <button
          className="text-red-500 text-xs"
          onClick={() => vocab.japanese && handleDelete(vocab.japanese)}
        >
          <TrashIcon className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </div>
  )
}
