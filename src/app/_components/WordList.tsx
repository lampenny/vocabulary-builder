import React, { FC } from "react"

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
    <div className="w-full flex flex-col">
      {!wordList.length ? (
        <div className="flex flex-row">No new words</div>
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
              <div
                key={`japanese_${i}_${vocab.japanese}`}
                className="border border-dashed rounded-xl p-4 border-yellow-600"
              >
                <p className="font-light text-xl">
                  {vocab.japanese}
                  <span className="text-sm text-gray-500 pl-3">
                    {vocab.furigana}
                  </span>
                </p>
                <p className="font-light text-white hover:text-black cursor-pointer">
                  {vocab.meaning}
                </p>
                <button
                  className="text-red-500 text-sm"
                  onClick={() => vocab.japanese && handleDelete(vocab.japanese)}
                >
                  remove
                </button>
              </div>
            )
          )}
        </div>
      )}
    </div>
  )
}
