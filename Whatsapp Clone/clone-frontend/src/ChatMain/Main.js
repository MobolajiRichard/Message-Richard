import { AttachFile, Attachment, EmojiEmotionsOutlined, EmojiEmotionsRounded, Mic, MicExternalOffOutlined, MoreVert, Search, Send } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import db from '../firebase'
import firebase  from 'firebase/compat/app'
import './main.css'
import MainChat from './MainChat'
import { useStateValue } from '../StateProvider'


function Main() {
const [roomName, setRoomName] = useState('')
const [seed, setSeed] = useState('')
const [messages, setMessages] = useState([])
const [input, setInput] = useState('')
const [{user}, dispatch] = useStateValue()
const {roomId} = useParams()

useEffect(()=>{
    if(roomId){
        db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot)=>
        setRoomName(snapshot.data().name))

        db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy ('timestamp', 'asc')
        .onSnapshot((snapshot)=>
            setMessages(snapshot.docs.map((doc)=>doc.data()))
        )

        
    }
}, [roomId])

useEffect(()=>{
    setSeed(Math.floor(Math.random() * 5000))
 }, [roomId])


const sendMessage = (e) =>{
    e.preventDefault()

    db.collection('rooms').doc(roomId)
    .collection('messages').add({
       message:input,
       name:user.displayName,
       timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('')
}
  return (
    <div className='main_container'>
            <header className='main_header'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className='main_header_info'>
                <h3>{roomName}</h3>
                <p>Last seen {''}

                    {
                        new Date (messages[messages.length - 1]?.
                            timestamp?.toDate()).toLocaleString()
                    }
                </p>
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
           messages={messages}
           />
        </main>
        <footer className='main_footer'>
           <div className='main_footer_info'>
           <IconButton>
                <EmojiEmotionsOutlined/>
            </IconButton>
            <form>
            <input value={input} onChange={e => { setInput(e.target.value)}} placeholder='Type a message...'/>
                <IconButton type='submit' onClick={sendMessage}>
                <Send  />       
                </IconButton>
            </form>
            <IconButton>
                <Mic/>
            </IconButton>
           </div>
        </footer>
    </div>
  )
}

export default Main