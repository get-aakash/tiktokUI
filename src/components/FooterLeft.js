import React from 'react'
import MusicNoteIcon from '../icons/MusicNoteIcon'

const FooterLeft = (props) => {
  return (
    
      <div className="footer-left">
        <div className="text">
            <h3>@{props.channel}</h3>
            <p>{props.description}</p>
            <div className="ticker">
                <MusicNoteIcon style={{width:'30px'}}/>
                <marquee scrollamount='2' direction="left">{props.song}</marquee>
            </div>
        </div>
      </div>
    
  )
}

export default FooterLeft
