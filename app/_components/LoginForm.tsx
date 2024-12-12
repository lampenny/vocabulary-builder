"use client"

import React, { FC } from "react"
import { Logo } from "./Logo"
import { Input } from "./Input"
import { useRouter } from "next/navigation"

export const LoginForm: FC = () => {
  const router = useRouter()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log("submit pushed")
    router.push("/home")
  }
  return (
    <div className="flex flex-col p-20 gap-y-8 items-center justify-center">
      <Logo withSlogan />

      <form onSubmit={onSubmit}>
        <div className="p-4 border border-dashed border-orange-400 rounded-xl flex flex-col gap-y-5 items-end">
          <div className="flex flex-row space-x-9">
            <Input type="email" placeholder="email" required />

            <Input type="password" placeholder="password" required />
          </div>

          <button className="p-5 px-36 rounded-2xl font-black text-4xl text-white bg-gradient-to-r from-amber-300 to-orange-700 hover:from-yellow-500 hover:to-pink-500">
            →
          </button>
        </div>
      </form>
    </div>
  )
}
