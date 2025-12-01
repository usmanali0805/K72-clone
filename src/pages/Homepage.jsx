import React from 'react'
import Video from '../component/Home/Video'
import HomeHeroText from '../component/Home/HomeHeroText'
import HomeBottomText from '../component/Home/HomeBottomText'

const Homepae = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center text-4xl font-bold">
      <div className="h-full w-full fixed">
      <Video />
      </div>
      <div className="w-screen h-screen relative flex flex-col justify-between py-3">
        <HomeHeroText />
        <HomeBottomText/>
      </div>
    </div>
  )
}

export default Homepae

