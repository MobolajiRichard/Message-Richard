import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { Avatar } from '@mui/material'
import db from '../firebase'

function SidebarChat({roomName, id}) {
   const [seed, setSeed] = useState('')
   const [messages, setMessages]= useState('')

   useEffect(()=>{
      if (id){
         db.collection('rooms').doc(id)
         .collection('messages')
         .orderBy ('timestamp', 'desc')
         .onSnapshot((snapshot)=>
             setMessages(snapshot.docs.map((doc)=>doc.data()))
         )
      }
     
   }, [])
   useEffect(()=>{
      setSeed(Math.floor(Math.random() * 5000))
   }, [id])
  return (
   <Link to={`/rooms/${id}`}>
      <div className='sidebarchat_container'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
         <div className='sidebarchat_info'>
            <h2>{roomName}</h2>
            <p>{messages[0]?.message}</p>
         </div>

     </div>
   </Link>
  )
}

export default SidebarChat