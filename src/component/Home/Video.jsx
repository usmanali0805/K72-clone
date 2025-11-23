import React from 'react'
import videoSrc from '../../assets/videos/homevideo.mp4'
const Video = () => {
  return (
    <div className="w-full h-full">
      <video className="w-full h-full object-cover" src={videoSrc} autoPlay muted loop></video>
    </div>
  )
}

export default Video
