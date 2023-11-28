import React from 'react'
import "./video.css"
const Video = (props) => {
  return (
    <div className="video">
        <video className='player'  src={props.url}></video>
    </div>      
    
  )
}

export default Video
