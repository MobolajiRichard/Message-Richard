import React from 'react'
import { Avatar } from '@mui/material'

function SidebarChat() {
  return (
   <div className='sidebarchat_container'>
            <Avatar/>
         <div className='sidebarchat_info'>
            <h2>New Chat</h2>
            <p>This is a new chat</p>
         </div>

     </div>
  )
}

export default SidebarChat