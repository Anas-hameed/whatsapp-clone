import React from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import db from './firebase';

function Chat() {
  const [message, setMessage] = useState('');
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState('');
  useEffect(() => {
    console.log(roomId);
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomName(snapshot.data().name);
        });
    }
  }, [roomId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello');
    setMessage('');
  };

  return (
    <div className='chat'>
      {/* Chat Header */}
      <div className='chat__header'>
        <Avatar></Avatar>
        <div className='chat__headerInfo'>
          <h3>{roomName}</h3>
          <p>Last seen...</p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      {/* Chat Message */}
      <div className='chat__body'>
        <div className='chat__message'>
          <a href='#' className='chat__name'>
            Anas
          </a>
          <p className='chat__content'>Random text</p>
          <p className='chat__date'>3:44 PM</p>
        </div>
      </div>
      {/* chat footer */}
      <div className='chat__footer'>
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <IconButton>
          <AttachFile />
        </IconButton>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
          />
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
