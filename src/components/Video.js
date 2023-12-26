import React, { useRef } from 'react'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'

const Video = (props) => {
    const videoRef = useRef(null)

	const onVideoPress = () => {
		// write toggle logic here
	
			if (videoRef.current.paused) {
				videoRef.current.play()
			} else {
				videoRef.current.pause()
			}
		
	}
  return (
   <div className="video">
    <video className="player"
				onClick={onVideoPress}
				muted
				ref={videoRef}
				loop
				src={props.url}></video>
    <div className="bottom-controls">
        <FooterLeft channel = {props.channel} description={props.description} song={props.song}/>
        <FooterRight likes = {props.likes} shares = {props.shares} messages = {props.messages} />
    </div>
   </div>
  )
}

export default Video
