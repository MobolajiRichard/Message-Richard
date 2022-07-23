import React from 'react'

function MainChat(props) {
    
  return (
    <p className={props.class}>
    <span className='chat_sender'>Richard</span>
    This is a message
    <span className='chat_timestamp'>{new Date().toUTCString()}</span>
</p>
  )
}

export default MainChat