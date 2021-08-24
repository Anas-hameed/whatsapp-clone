import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [user, seruser] = useState('No');
  return (
    <div className='app'>
      <div className='app__body'>
        <Router>
          <Switch>
            <Route path='/' exact>
              <Sidebar />
            </Route>
            <Route path='/rooms/:roomId'>
              <Sidebar />
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
