import React, { FC } from "react"
import { WordCard } from "./WordCard"

interface Vocab {
  japanese: string | null
  furigana: string | null
  meaning: string | null
}

interface WordListProps {
  wordList: Vocab[]
  handleDelete: (word: string) => void
}

export const WordList: FC<WordListProps> = ({ wordList, handleDelete }) => {
  return (
    <div className="w-full flex flex-col mb-10">
      {!wordList.length ? (
        <div className="flex flex-row text-xl items-center place-self-center">
          Add some words to start learning
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {wordList.map(
            (
              vocab: {
                japanese: string | null
                furigana: string | null
                meaning: string | null
              },
              i: number
            ) => (
              <WordCard
                key={`wordCard_${i}_${vocab.meaning}`}
                vocab={vocab}
                handleDelete={handleDelete}
              />
            )
          )}
        </div>
      )}
    </div>
  )
}
