import React from 'react'
import './sidebar.css'
import SidebarChat from './SidebarChat'
import {Avatar, IconButton} from '@mui/material'

import {Chat, DonutLargeRounded, MoreVertOutlined, Search} from '@mui/icons-material'

function Sidebar() {
    const handleclick = ()=>{
        alert('working')
    }
  return (
    <div className='sidebar_container'>
        <div className='sidebar_header'>
            <Avatar/>
            <div>
                <IconButton>
                <DonutLargeRounded
                onClick={handleclick}
                />
                </IconButton>
                <IconButton>
                <Chat/>
                </IconButton>
                <IconButton>
                <MoreVertOutlined/>
                </IconButton>
            </div>
        </div>
        <div className='sidebar_main_search'>
            <div className='sidebar_search_container'>
                <Search/>
                <input
                placeholder='Search or New Chat..'
                />
            </div>
        </div>
        <div className='sidebar_chats'>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>
    </div>
  )
}

export default Sidebar