import React from 'react'
import { useStateValue } from '../StateProvider'


function MainChat({messages}) {
  const [{user}, dispatch] = useStateValue()
  return (
    <div>
          {messages.map((message)=>(
           <p className={`chat_message ${message.name === user.displayName && 'chat_receiver'}`}>
        <span className='chat_sender'>{message.name}</span>
        {message.message}
        <span className='chat_timestamp'>
          {new Date(message.timestamp?.toDate()).toLocaleString()}
          </span>
      </p>
      ))} 
    </div>
  )
}

export default MainChat