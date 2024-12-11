"use client"

import React, { FC } from "react"
import { Logo } from "./Logo"
import { Input } from "./Input"

export const LoginForm: FC = () => {
  const onSubmit = () => {
    console.log("submit pushed")
  }
  return (
    <div className="flex flex-col p-20 gap-y-8 items-center justify-center ">
      <Logo withSlogan />
      <form onSubmit={onSubmit}>
        <div className="p-4 border border-dashed rounded-xl flex flex-col gap-y-5 items-center justify-center">
          <h1 className="font-semibold text-white text-3xl">Log in</h1>
          <div className="flex flex-row space-x-9">
            <Input
              // type="text"
              // className="rounded-xl p-5 outline-none border-2"
              placeholder="email"
            />

            <Input type="password" placeholder="password" />
          </div>

          <button className="p-5 px-10 rounded-2xl bg-gradient-to-r from-amber-300 to-orange-700 hover:from-yellow-500 hover:to-pink-500">
            →
          </button>
        </div>
      </form>
    </div>
  )
}
