
import { useEffect, useReducer } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Auth from './pages/auth/Auth';
import socket from './socket';
import reducer from './reducer';
import Users from './components/users/Users';
import Messages from './components/messages/Messages';
import axios from 'axios';
import Home from './pages/home/Home';
function App() {
  return (
    <BrowserRouter>
          <div className="app">
              <Routes>
                  <Route path = "/" element = {<Auth/>}></Route>
                  <Route path = "/home" element = {<Home/>}></Route>
              </Routes>
          </div>
        </BrowserRouter>
  );
}

export default App;
