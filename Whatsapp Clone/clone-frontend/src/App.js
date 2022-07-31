import Sidebar from './ChatSidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Main from './ChatMain/Main';
import './App.css';
import {useState, useEffect} from 'react'
import Login from './Login';
import { useStateValue } from './StateProvider';



function App() {
  const [{user}, dispatch] = useStateValue()
  const [messages, setMessages] = useState([])


  console.log(messages);

  return (
    <div className="clone-app">
      {!user ? (
        <div>
          <Login/>
        </div>
      ):(
        <div className='chatapp_container'>
          <div className='chatapp_sidebar'>
            <Sidebar/>
          </div>
        <div className='chatapp_main'>
          <Routes>
            < Route path='/rooms/:roomId' element={ <Main messages={messages}/>}/>
          </Routes>
        </div>
      </div>
      )}
    </div>
  );
}

export default App;
