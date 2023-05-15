'use client'
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const ProfileInfo = ({data}: {data: any}) => {
    const profile = data.items[0].fields

return (
  <div>
    <motion.div
      className="absolute left-[130px] top-[60px] sm:left-[170px] sm:top-[87px] lg:left-[200px] lg:top-[100px] xl:left-[235px]"
      initial={{ opacity: 0, x: '300px' }}
      animate={{ opacity: 1, x: '0px' }}
      transition={{ duration: 1.5, delay: 1 }}
    >
      <div className="ml-4">
        <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-bold ">
          {profile.name}
        </h1>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: '-300px' }}
      animate={{ opacity: 1, x: '0px' }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="w-[100px] rounded-md border border-[#818589] mb-2 overflow-hidden">
        <Image
          src={`https:${profile.imageUrl.fields.file.url}`}
          alt="Profile Photo"
          className="dark:invert"
          width={100}
          height={100}
          priority
        />
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: '-300px' }}
      animate={{ opacity: 1, y: '0px' }}
      transition={{ duration: 1, delay: 0 }}
    >
      <h2 className=" mt-4 text-[24px] md:text-[32px] ">
        {profile.description}
      </h2>
      <div>
        <p className="mt-2">{profile.bio}</p>
      </div>
    </motion.div>
  </div>
)
}

export default ProfileInfo