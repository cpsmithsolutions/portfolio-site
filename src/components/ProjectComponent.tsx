'use client'
import Link from "next/link"
import React, {useState, useEffect} from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from 'react-responsive'

interface ProfileData {
  [key: string]: any
}

const ProjectComponent = ({ data }: { data: ProfileData }) => {
  const [isMedium, setIsMedium] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [showHoverPopup, setShowHoverPopup] = useState<boolean>(false) // Hover popup state
  const [imgLoading, setImgLoading] = useState<boolean>(false) // Modal image loading state

  const isMediumSize = useMediaQuery({
    query: '(min-width: 768px)',
  })

  useEffect(() => {
    setIsMedium(isMediumSize)
  }, [isMediumSize])

  const handleImageClick = () => {
    setIsModalOpen(true) // Open the modal when the image is clicked
    setImgLoading(true) // Reset loading state when opening modal
  }

  const handleCloseModal = () => {
    setIsModalOpen(false) // Close the modal
    setImgLoading(false) // Reset loading state when closing modal
  }
  // comment

  return (
    <motion.div className="flex flex-col max-w-6xl justify-center items-center">
      <div className="flex w-full justify-center ml:justify-start">
        {data.projectUrl ? (
          <Link href={data.projectUrl} target="_blank">
            <h3 className="text-[28px] text-center md:text-[34px] my-2 mb-4 font-bold transition duration-500 ease-in-out ease-in-out hover:text-[#6082B6]">
              {data.title}
            </h3>
          </Link>
        ) : (
          <h3 className="text-[28px] text-left md:text-[34px] my-2 mb-4 font-bold transition duration-500 ease-in-out ease-in-out">
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
      <div className="flex flex-col w-[100%] h-[100%] ml:flex-row">
        <div className="flex justify-center mb-4">
          <div
            className="relative border border-[#818589] rounded-md h-100% overflow-hidden w-[323px] h-[182px] md:w-[400px] md:h-[224px]  cursor-pointer"
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
            <AnimatePresence>
              {showHoverPopup && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 pointer-events-none"
                >
                  <div className="bg-black bg-opacity-60 px-4 py-2 rounded text-white text-sm font-bold">
                    Click to View Full Screen
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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
                className="absolute top-4 right-4 text-white text-2xl z-20 pointer-events-auto"
                onClick={handleCloseModal} // Close modal on button click
              >
                ✕
              </button>
              {/* Modal Image with Loading Spinner */}
              <div className="relative w-screen flex justify-center items-center">
                {imgLoading && (
                  <div className="absolute inset-0 flex justify-center items-center z-10 pointer-events-none">
                    <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <Image
                  src={`https:${data.imageUrl.fields.file.url}`}
                  width={1920}
                  height={1080}
                  quality={100}
                  alt="Expanded project image"
                  className={`rounded-md w-screen h-auto max-h-screen object-contain ${
                    imgLoading ? 'opacity-0' : 'opacity-100'
                  } transition-opacity duration-500`}
                  onLoadingComplete={() => setImgLoading(false)}
                />
              </div>
              {/* Visit Site Link or Fallback Text */}
              <div className="absolute bottom-4 lg:bottom-8 w-full flex justify-center items-center">
                {data.projectUrl ? (
                  <Link
                    href={data.projectUrl}
                    target="_blank"
                    className="text-white text-md lg:text-lg font-bold bg-gradient-to-br from-blue-300 via-blue-500 via-purple-500 to-indigo-700 px-2 py-1 lg:px-4 lg:py-2 rounded-md ring-white/20 transform hover:scale-103 transition-all duration-300"
                  >
                    Visit Site
                  </Link>
                ) : (
                  ''
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