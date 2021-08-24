import React from 'react';
import { useState, useEffect } from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';
import db from './firebase';
function Sidebar() {
  const [rooms, setrooms] = useState([]);
  useEffect(() => {
    const unsub = db.collection('rooms').onSnapshot((item) => {
      setrooms(
        item.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    });
    return () => {
      unsub();
    };
  }, []);
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar />
        <div className='sidebar__headerRight'>
          <IconButton className='sidebar__icon'>
            <DonutLargeIcon />
          </IconButton>
          <IconButton className='sidebar__icon'>
            <ChatIcon />
          </IconButton>
          <IconButton className='sidebar__icon'>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='sidebar__search'>
        <div className='sidebar__searchcontainer'>
          <SearchOutlined />
          <input type='text' placeholder='Search or Start new chat' />
        </div>
      </div>
      <div className='sidebar__chat'>
        <SidebarChat addNewChat />
        {rooms.map((item) => {
          return (
            <SidebarChat key={item.id} id={item.id} name={item.data.name} />
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
