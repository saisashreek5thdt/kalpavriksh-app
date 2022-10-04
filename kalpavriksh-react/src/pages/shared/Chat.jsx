import React from 'react'
import Sidebar from '../../Components/chat/Sidebar'
import ChatComponent from '../../Components/chat/ChatComponent'

const Chat = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/> 
        <ChatComponent />
      </div>
    </div>
  )
}

export default Chat