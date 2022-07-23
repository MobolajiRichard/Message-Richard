import Sidebar from './ChatSidebar/Sidebar';
import Main from './ChatMain/Main';
import './App.css';

function App() {
  return (
    <div className="clone-app">
      <div className='chatapp_container'>
        <div className='chatapp_sidebar'>
          <Sidebar/>
        </div>
        <div className='chatapp_main'>
          <Main/>
        </div>
      </div>
    </div>
  );
}

export default App;
