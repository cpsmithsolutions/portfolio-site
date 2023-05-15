'use client'
import Link from "next/link"
import React, {useState, useEffect} from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from 'react-responsive'

const ProjectComponent = ({ data }: { data: any }) => {
  const [showVisitSite, setShowVisitSite] = useState<boolean>(false)
  const [isMedium, setIsMedium] = useState(true)

  const isMediumSize = useMediaQuery({
    query: '(min-width: 640px)',
  })

  useEffect(() => {
    setIsMedium(isMediumSize)
  }, [isMediumSize])

  return (
    <motion.div className="py-2 flex flex-col justify-center items-center">
      <Link href={data.projectUrl} target="_blank">
        <h3 className="text-[24px] md:text-[32px] my-4 text-center transition duration-500 ease-in-out ease-in-out hover:text-[#6082B6]">
          {data.title}
        </h3>
      </Link>
      <div className="flex justify-center mb-4">
        <Link href={data.projectUrl} target="_blank">
          <div
            onMouseOver={() => setShowVisitSite(true)}
            onMouseLeave={() => setShowVisitSite(false)}
            className="border border-[#818589] rounded-md overflow-hidden w-[325px] sm:w-[500px] cursor-pointer  transition duration-200 ease-in-out ease-in-out hover:opacity-[.7] "
          >
            {isMedium ? (
              <Image
                src={`https:${data.imageUrl.fields.file.url}`}
                width={500}
                height={250}
                alt="pog digital image"
              />
            ) : (
              <Image
                src={`https:${data.imageUrl.fields.file.url}`}
                width={325}
                height={125}
                alt="pog digital image"
              />
            )}

            <AnimatePresence>
              {showVisitSite && (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: '0px' }}
                  animate={{ opacity: 1, y: '-50px' }}
                  transition={{ type: 'spring', duration: 1.25 }}
                  exit={{ y: '0px', opacity: 0 }}
                >
                  <div className="absolute text-[#6082B6] bg-white  box-shadow opacity-[.2] h-[70px] font-[600] w-[100%]"></div>
                  <div className="absolute text-[19px] text-[#6082B6] mt-3 font-[600] w-[100%] transition duration-200 ease-in-out ease-in-out hover:text-[#03a9f4]">
                    Visit Website
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Link>
      </div>
      <div className="flex flex-col max-w-4xl justify-center">
        <div>
          {data.summaryDescription && (
            <div className="mt-2 ">{data.summaryDescription}</div>
          )}
        </div>
        <div className="mt-2 ">
          {data.description.map((d: any) => (
            <p className="pt-1" key={d}>{`• ${d}`}</p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectComponent