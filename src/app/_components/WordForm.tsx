import React, { ChangeEvent, MouseEvent, FC, MouseEventHandler } from "react"
import { Input } from "./Input"

interface FormCardProps {
  wordInput: string
  huriganaInput: string
  meaningInput: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleHuriganaChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleMeaningChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void
  handleKeyDown: (e: KeyboardEvent) => void
  handleCheckbox?: MouseEventHandler<HTMLInputElement>
  japanese: boolean
}

export const WordForm: FC<FormCardProps> = ({
  wordInput,
  huriganaInput,
  meaningInput,
  handleChange,
  handleHuriganaChange,
  handleMeaningChange,
  handleClick,
  handleKeyDown,
  handleCheckbox,
  japanese,
}) => {
  return (
    <div className="flex flex-col justify-center items-center border rounded-lg p-10 border-yellow-600">
      <Input
        value={wordInput}
        placeholder="単語を入れてください"
        onChange={(e) => handleChange(e)}
        required
      />

      <Input
        label="ふりがな"
        placeholder="ふりがなを入れてください"
        value={huriganaInput}
        onChange={(e) => handleHuriganaChange(e)}
      />

      <Input
        label="意味"
        placeholder="意味はなんですか?"
        value={meaningInput}
        onChange={(e) => handleMeaningChange(e)}
      />

      <div className="relative group mt-10 w-1/2">
        <div className="absolute -inset-0.5 bg-pink-600 rounded-lg blur-sm opacity-50 bg-gradient-to-r from-orange-200 to-orange-500 group-hover:opacity-100 transition duration-200"></div>
        <button
          className="relative text-3xl text-orange-500 bg-white rounded-lg border-2 border-orange-400 p-4 w-full"
          onClick={(e) => handleClick(e)}
          // onKeyDown={(e) => handleKeyDown(e)}
        >
          Add
        </button>
      </div>
    </div>
  )
}
