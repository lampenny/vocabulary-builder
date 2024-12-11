"use client"

import React, { ChangeEvent, MouseEvent, useState } from "react"
import { WordForm } from "./WordForm"
import { WordList } from "./WordList"
import { initialWordList } from "../../../public/wordList"
import { toast } from "react-toastify"

export interface WordListType {
  id: number
  japanese: string
  furigana?: string | null
  meaning?: string | null
}

export const Home = () => {
  const [word, setWord] = useState<string>("")
  const [furigana, setFurigana] = useState<string>("")
  const [meaning, setMeaning] = useState<string>("")
  const [wordList, setWordList] = useState<WordListType[]>(initialWordList)
  const [isLearningJapanese, setIsLearningJapanese] = useState(false)

  const handleWordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value)
  }

  const handleHuriganaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFurigana(e.target.value)
  }

  const handleMeaningChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMeaning(e.target.value)
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (word) {
      toast.success("word added!")
      setWordList([
        {
          id: wordList.length + 1,
          japanese: word,
          furigana: furigana ? furigana : null,
          meaning: meaning ? meaning : null,
        },
        ...wordList,
      ])
      setWord("")
      setFurigana("")
      setMeaning("")
    } else {
      toast.error("Please input a word")
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && word && furigana && meaning) {
      setWordList([
        {
          id: wordList.length + 1,
          japanese: word,
          furigana: furigana ? furigana : null,
          meaning: meaning ? meaning : null,
        },
        ...wordList,
      ])
      setWord("")
      setFurigana("")
      setMeaning("")
    } else if (e.key === "Enter") {
      toast.error("Please input a word")
    }
  }

  const handleDelete = (word: string) => {
    setWordList(wordList.filter((t) => t.japanese !== word))
  }

  const handleCheckbox = () => {
    setIsLearningJapanese((prev) => !prev)
  }

  return (
    <>
      <div className="flex flex-col md:flex-row w-full gap-x-10 gap-y-5 md:gap-y-0">
        <div className="w-full md:w-1/2">
          <WordForm
            wordInput={word}
            huriganaInput={furigana}
            meaningInput={meaning}
            handleChange={handleWordChange}
            handleHuriganaChange={handleHuriganaChange}
            handleMeaningChange={handleMeaningChange}
            handleClick={handleClick}
            handleKeyDown={handleKeyDown}
            japanese={isLearningJapanese}
            handleCheckbox={handleCheckbox}
          />
        </div>
        <div className="w-full md:w-1/2">
          <WordList wordList={wordList} handleDelete={handleDelete} />
        </div>
      </div>
    </>
  )
}
