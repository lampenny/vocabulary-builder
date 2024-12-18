import React, { FC } from "react"
import Image from "next/image"

interface Logo {
  withSlogan?: boolean
  width?: number
  height?: number
}

export const Logo: FC<Logo> = ({ withSlogan, width = 50, height = 50 }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <Image
        src="/lamp.svg"
        width={width}
        height={height}
        alt="Icon of a lamp"
        priority={true}
      />
      {withSlogan ? (
        <div className="flex flex-col  items-center justify-center mb-5">
          <h1 className="text-xl underline">Vocabulary Builder</h1>
          <h2 className="text-xs">Built for Japanese language learning</h2>
        </div>
      ) : null}
    </div>
  )
}
