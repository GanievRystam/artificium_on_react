import React, {useState} from "react";
import '../../App.scss';
import socket from "../../socket";
import axios from "axios";
export default function Auth ({onLogin}) {
    const [roomId, setRoomId] = useState('');
    const [userName, setUserName] = useState('');
    const onEnter = async () => {
        if(!roomId || !userName) {
            return alert('Введите данные');
        }
        const obj = {roomId, userName}
        await axios.post('/rooms', obj);
        onLogin(obj);
    }
    return (
    <section className="section-auth">
        <div className="container">
            <div className="authorization">
                <div className="authorization-form">
                    <div className="form flex">
                        <div className="offer">
                            <h1 className="offer__header">Let's get <span className="offer__header_liner"> creative!</span></h1>
                            <p className="offer__text">Log in to Artificium to start creating magic.</p>
                        </div>
                        <form action="" className="auth-form">
                            <div className="auth-form-wrap-input">
                                <input type="text" name="roomId" className="auth-form__input" placeholder="Room Id" value={roomId} onChange={(e) => setRoomId(e.target.value)}/>
                            </div>
                            <div className="auth-form-wrap-input">
                                <input type="text" name="userName" className="auth-form__input" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                            </div>
                            <button className="btn" type="button" onClick={onEnter}>Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}