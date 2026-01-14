"use client"
import React, {useState} from "react"
import Image from "next/image"
import Link from 'next/link'

const Social = ({url, name, imageName}: {url: string, name: string, imageName: string}) => {
    const [showText, setShowText] = useState(false)

    return (
      <div className="mx-6 cursor-pointer">
        <Link href={url} target="_blank">
          <div className="flex flex-col items-center w-[50px] h-[50px]">
            <div
              className="transition-all duration-300 transform hover:scale-110"
              onMouseEnter={() => setShowText(true)}
              onMouseLeave={() => setShowText(false)}
            >
              <Image
                alt="linkedIn"
                width={32}
                height={32}
                src={`/images/${imageName}`}
              />
            </div>
            <p
              className={`text-[#f5f5f5] text-[10px] pt-1 transition-opacity duration-300 ${
                showText ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ pointerEvents: 'none', height: showText ? 'auto' : 0 }}
            >
              {name}
            </p>
          </div>
        </Link>
      </div>
    )
}

export default Social