import Link from "next/link"
import React, { FC } from "react"

export const NavBar: FC = () => {
  return (
    <div className="flex flex-row justify-between p-2 md:px-10 md:py-5 bg-orange-400 text-white">
      <p className="underline">Vocabulary Builder</p>
      <Link href="/">Log out</Link>
    </div>
  )
}
