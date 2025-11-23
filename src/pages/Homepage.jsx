import React from 'react'
import Video from '../component/Home/Video'
import HomeHeroText from '../component/Home/HomeHeroText'

const Homepae = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center text-4xl font-bold">
      <div className="h-full w-full fixed">
      <Video />
      </div>
      <div className="w-screen h-screen relative">
        <HomeHeroText />
      </div>
    </div>
  )
}

export default Homepae

