'use client'
import Link from "next/link"
import React, {useState, useEffect} from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from 'react-responsive'

const ProjectComponent = ({ data }: { data: any }) => {
  const [isMedium, setIsMedium] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [showHoverPopup, setShowHoverPopup] = useState<boolean>(false) // Hover popup state

  console.log({ showHoverPopup })

  const isMediumSize = useMediaQuery({
    query: '(min-width: 768px)',
  })

  useEffect(() => {
    setIsMedium(isMediumSize)
  }, [isMediumSize])

  const handleImageClick = () => {
    setIsModalOpen(true) // Open the modal when the image is clicked
  }

  const handleCloseModal = () => {
    setIsModalOpen(false) // Close the modal
  }
  // comment

  return (
    <motion.div className="flex flex-col max-w-6xl justify-center items-center">
      <div className="flex w-full justify-center ml:justify-start">
        {data.projectUrl ? (
          <Link href={data.projectUrl} target="_blank">
            <h3 className="text-[28px] text-center md:text-[34px] my-2 mb-4 w-[100%] font-bold transition duration-500 ease-in-out ease-in-out hover:text-[#6082B6]">
              {data.title}
            </h3>
          </Link>
        ) : (
          <h3 className="text-[28px] text-left md:text-[34px] my-2 mb-4 w-[100%] font-bold transition duration-500 ease-in-out ease-in-out">
            {data.title}
          </h3>
        )}

        {data.githubUrl ? (
          <Link href={data.githubUrl} target="_blank">
            <p className="mt-7 ml-4 font-bold transition duration-500 ease-in-out ease-in-out hover:text-[#6082B6]">
              GitHub
            </p>
          </Link>
        ) : (
          ''
        )}
      </div>
      <div className="flex flex-col w-[100%] ml:flex-row">
        <div className="flex justify-center mb-4">
          <div
            className="border border-[#818589] rounded-md overflow-hidden w-[325px] md:w-[400px] cursor-pointer  transition duration-200 ease-in-out ease-in-out hover:opacity-[.7] cursor-pointer"
            onClick={handleImageClick}
            onMouseEnter={() => setShowHoverPopup(true)} // Show popup on hover
            onMouseLeave={() => setShowHoverPopup(false)} // Hide popup when hover ends
          >
            {isMedium ? (
              <Image
                src={`https:${data.imageUrl.fields.file.url}`}
                width={400}
                height={250}
                alt="project image"
              />
            ) : (
              <Image
                src={`https:${data.imageUrl.fields.file.url}`}
                width={325}
                height={125}
                alt="project image"
              />
            )}
            {showHoverPopup && (
              // <div className="absolute -mt-8 top-0 left-0 w-[325px] z-10 md:w-[400px] flex justify-center items-center">
              <div className="relative">
                <div className="absolute w-full -mt-6 text-white text-sm font-bold flex justify-center">
                  <p>Click to View Full-Screen</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col text-[14px] lg:text-[16px] sm:pl-4 xl:pl-6">
          <div>
            {data.summaryDescription && (
              <div className="mb-2">{data.summaryDescription}</div>
            )}
          </div>
          <div className="">
            {data.description.map((d: any) => (
              <p className="pt-1" key={d}>{`• ${d}`}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Full-Screen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative">
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={handleCloseModal} // Close modal on button click
              >
                ✕
              </button>
              <Image
                src={`https:${data.imageUrl.fields.file.url}`}
                width={1200}
                height={800}
                alt="Expanded project image"
                className="rounded-md"
              />
              {/* Visit Site Link or Fallback Text */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                {data.projectUrl ? (
                  <Link
                    href={data.projectUrl}
                    target="_blank"
                    className="text-white text-lg font-bold bg-[#6082B6] px-4 py-2 rounded-md hover:bg-[#506a9b] transition duration-300"
                  >
                    Visit Site
                  </Link>
                ) : (
                  <p className="text-white text-lg font-bold">
                    Site No Longer Available
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ProjectComponent