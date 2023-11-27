import React from 'react'

const Video = (props) => {
  return (
    <div className="video">
        <video className='player'  src={props.url}></video>
    </div>      
    
  )
}

export default Video
