

import ProfileInfo from "../components/ProfileInfo"
import ProjectsComponent from '@/components/ProjectsComponent'
import { createClient } from 'contentful'
import Socials from '@/components/Socials'
import Name from '@/components/Name'

export default async function Home() {

  async function fetchContentfulData() {
    const client = createClient({
      space: String(process.env.CONTENTFUL_SPACE_ID),
      accessToken: String(process.env.CONTENTFUL_ACCESS_KEY),
    })

    const projects = await client.getEntries({
      content_type: 'project',
      //@ts-ignore
      order: '-fields.dateCompleted',
    })
    const profile = await client.getEntries({ content_type: 'profile' })
    return {
      profile: JSON.parse(JSON.stringify(profile)),
      projects: JSON.parse(JSON.stringify(projects)),
    }
  }

  const { projects, profile } = await fetchContentfulData()

  return (
    <div className="relative w-full h-full">
      <div className="absolute w-full h-full bg-contain bg-no-repeat box-shadow bg-[url('/images/faded-city-circuit-low-res.jpeg')] opacity-[.29]" />
      <div className="relative">
        <div>
          <div className="hidden sm:block absolute sm:top-[24px]">
            <Socials />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-[#f5f5f5] p-8 sm:p-16 sm:pt-[72px] lg:p-20 xl:px-[128px]">
            <div className="flex flex-col justify-center">
              <ProfileInfo data={profile} />
              <ProjectsComponent data={projects} />
            </div>
          </div>
          <div className="pb-6 flex flex-col justify-center w-[100vw]">
            <Name data={profile} />
            <Socials />
          </div>
        </div>
      </div>
    </div>
  )
}