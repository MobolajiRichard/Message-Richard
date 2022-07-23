import { AttachFile, Attachment, EmojiEmotionsOutlined, EmojiEmotionsRounded, Mic, MicExternalOffOutlined, MoreVert, Search } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './main.css'
import MainChat from './MainChat'

function Main() {
  return (
    <div className='main_container'>
            <header className='main_header'>
            <Avatar/>
            <div className='main_header_info'>
                <h3>New Chat</h3>
                <p>Last seen at...</p>
            </div>
            <div>
                <IconButton>
                    <Search/>
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
        </header>
        <main className='main_main'>
           <MainChat
           class='chat_message'
           />
           <MainChat
           class='chat_message chat_receiver'
           />
           <MainChat
           class='chat_message'
           />
        </main>
        <footer className='main_footer'>
           <div className='main_footer_info'>
           <IconButton>
                <EmojiEmotionsOutlined/>
            </IconButton>
            <input placeholder='Type a message...'/>
            <IconButton>
                <Mic/>
            </IconButton>
           </div>
        </footer>
    </div>
  )
}

export default Main