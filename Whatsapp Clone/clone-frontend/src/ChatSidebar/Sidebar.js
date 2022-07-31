import React,{useState, useEffect} from 'react'
import './sidebar.css'
import axios from '../axios'
import SidebarChat from './SidebarChat'
import db from '../firebase'
import {Avatar, IconButton} from '@mui/material'

import {Chat, DonutLargeRounded, MoreVertOutlined, Search} from '@mui/icons-material'
import { useStateValue } from '../StateProvider'
 
function Sidebar() {
    const [rooms, setRooms] = useState([])
    const [{user}, dispatch] = useStateValue()

    useEffect(()=>{
        db.collection('rooms').onSnapshot(
            snapshot =>(
                setRooms(snapshot.docs.map(doc =>
                    ({
                        id: doc.id,
                        data:doc.data()
                    })))
            )
        )
      },[])
    
      const createChat = ()=> {
        const roomName = prompt(' please enter a name for the chat')

        if (roomName){
            db.collection('rooms').add({
                name: roomName
            })
        }
      }

    const handleclick = ()=>{
        alert('working')
    }
  return (
    <div className='sidebar_container'>
        <div className='sidebar_header'>
            <Avatar src={user?.photoURL }/>
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
        <h2 onClick={createChat} className='addNewChat'>Add New Chat</h2>
        <div className='sidebar_chats'>
   
          {rooms.map((room)=>(
                <SidebarChat key={room.id} id={room.id}
                roomName={room.data.name}/>
          )     
          )}
        </div>
    </div>
  )
}

export default Sidebar