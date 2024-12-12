"use client"

import Link from "next/link"
import React, { FC, useEffect, useState } from "react"

export const NavBar: FC = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false) // Hide on scroll down
      } else {
        setIsVisible(true) // Show on scroll up
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <div
      className={`z-50 fixed bottom-0 left-0 w-full bg-gray-800 text-white transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex flex-row-reverse items-center py-5 px-10">
        <Link href="/">Log out</Link>
      </div>
    </div>
  )
}
