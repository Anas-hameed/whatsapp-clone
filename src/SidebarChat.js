import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';
import db from './firebase';
import { Link } from 'react-router-dom';
function SidebarChat({ addNewChat, name, id }) {
  if (!addNewChat) {
    return (
      <Link to={`/rooms/${id}`}>
        <div className='sidebarChat'>
          <Avatar></Avatar>
          <div className='sidebarChat_info'>
            <h2>{name}</h2>
            <p>Last Message...</p>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <div
        className='sidebarChat'
        onClick={() => {
          const roomName = prompt('Enter name for the chat');
          if (roomName) {
            db.collection('rooms').add({ name: roomName });
          }
        }}
      >
        <h2>Add New Chat</h2>
      </div>
    );
  }
}

export default SidebarChat;
