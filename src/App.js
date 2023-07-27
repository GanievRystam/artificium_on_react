
import { useEffect, useReducer } from 'react';
import Auth from './components/auth/Auth';
import socket from './socket';
import reducer from './reducer';
import Users from './components/users/Users';
import Messages from './components/messages/Messages';
import axios from 'axios';
function App() {
  const [state, dispatch] = useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
    users: [],
    messages:[],
  });
  const onLogin = async (obj) => {
    dispatch({
      type: 'joined',
      payload: obj
    });
    socket.emit('ROOM:join', obj);
    const {data} = await axios.get(`/rooms/${obj.roomId}`);
    setUsers(data);
  }
  const setUsers = (users) => {
    dispatch({
      type:'SET_USERS',
      payload: users
    })
  }
  const addMessage = (message) => {
    dispatch({
      type:'NEW_MESSAGE',
      payload: message
    })
  }
  useEffect(()=> {
    socket.on('ROOM:SET_USERS', (users) => {setUsers(users)});
    socket.on('ROOM:NEW_MESSAGE', (message) => {addMessage(message)});
  }, [])
  return (
    <>
    { !state.joined &&
    <div className="App">
         <Auth onLogin = {onLogin}/>
    </div>
  }
  { state.joined &&
    <section class="section-auth">
    <div class="container">
      <Users {...state}/>
      <Messages {...state} onAddMessage= {addMessage}/>
    </div>
    </section>
  }
  </>
  );
}

export default App;
