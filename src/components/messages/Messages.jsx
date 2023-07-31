import React, { useState } from "react";
import socket from "../../socket";


export default function Messages ({users, messages, userName, roomId, onAddMessage}) {
    const [messageValue, setMessage] = useState('');
    const onSendMessage = () => {
    }
    return (
        <div className ="chat">
            <div className ="chat-top">
                <div className ="chat-top-name">
                    <h2 className ="chat-top-name__header">Orbital Oddysey</h2>
                    <span className ="chat-top-name__text">Marketing Campaign for a new TV series Launch</span>
                </div>
                <div className ="chat-top">
                    <div className ="access-users access-users-chat">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/Avatar-1.png`} alt="avatar"
                            className ="access-users__img access-users-chat__img"/>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/Avatar-1.png`} alt="avatar"
                            className ="access-users__img access-users-chat__img"/>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/Avatar-2.png`} alt="avatar"
                            className ="access-users__img access-users-chat__img"/>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/Avatar-3.png`} alt="avatar"
                            className ="access-users__img access-users-chat__img"/>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/Avatar-4.png`} alt="avatar"
                            className ="access-users__img access-users-chat__img"/>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/Avatar-5.png`} alt="avatar"
                            className ="access-users__img access-users-chat__img"/>
                        <div className ="access-users__count"></div>
                    </div>
                    <div className ="chat-top-icon">
                        <img className ="chat-top-icon__share" src={`${process.env.PUBLIC_URL}/assets/img/share.svg`} alt=""/>
                        <span className ="chat-top-icon__text">Share</span>
                    </div>
                    <div className ="chat-top-icon">
                        <img className ="chat-top-icon__edit" src={`${process.env.PUBLIC_URL}/assets/img/edit.svg`} alt=""/>
                    </div>
                </div>
            </div>
            <div className ="chat-top chat-top-two">
                <div className ="chat-top-items">
                    <div className ="chat-top-item chat-top-item-active">
                        <img className ="chat-icon" src={`${process.env.PUBLIC_URL}/assets/img/artificium.svg`} alt=""/>
                        <h5 className ="chat-top-item__head">Artificium</h5>
                    </div>
                    <div className ="chat-top-item">
                        <img className ="chat-icon" src={`${process.env.PUBLIC_URL}/assets/img/comment-circle.svg`} alt=""/>
                        <h5 className ="chat-top-item__head">Chat</h5>
                    </div>
                    <div className ="chat-top-item">
                        <img className ="chat-icon" src={`${process.env.PUBLIC_URL}/assets/img/folder.svg`} alt=""/>
                        <h5 className ="chat-top-item__head">Library</h5>
                    </div>
                </div>
            </div>
            <div className ="chat-fild">
                <div className="chat-fild" >
                    <div class ="send-items">
                            <div className = "send-item">
                                <div className ="send-user">
                                    <div className = "send-user-wrap"> 
                                        <img className = "send-user__logo" src={`${process.env.PUBLIC_URL}/assets/img/Avatar-1.png`}/>
                                        <div className = "send-user__name">Djon</div>
                                        <span className = "send-user__time">11/12/2022</span>
                                        <img className = "send-user__copy" src={`${process.env.PUBLIC_URL}/assets/img/copy-icon.svg`} data-action = "copy"/>
                                    </div>
                                </div>
                                <div className ="send-text">dsafdfsa</div> 
                            </div>
                    </div>
                </div>
                <div className ="chat-offer">
                    <h2 className ="chat-offer__header offer__header">Innovation Starter Pack</h2>
                    <p className ="chat-offer__text offer__text">Kickstart your innovation process with our
                        comprehensive
                        selection
                        of predefined prompts.</p>
                </div>
                <div className ="chat-options">
                    <div className ="chat-option">
                        <img className ="chat-option__icon" src={`${process.env.PUBLIC_URL}/assets/img/comment-circle.svg`} alt=""/>
                        <h3 className ="chat-option__header">Creative Assets</h3>
                        <div className ="options">
                            <div className ="option">
                                <h6 className ="option__head">UI wireframe</h6>
                            </div>
                            <div className ="option">
                                <h6 className ="option__head">Brochure design</h6>
                            </div>
                            <div className ="option">
                                <h6 className ="option__head">Social media</h6>
                            </div>
                            <div className ="option">
                                <h6 className ="option__head">Brand guidelines</h6>
                            </div>
                        </div>
                    </div>
                    <div className ="chat-option">
                        <img className ="chat-option__icon" src={`${process.env.PUBLIC_URL}/assets/img/code.svg`} alt=""/>
                        <h3 className ="chat-option__header">Developer Tools</h3>
                        <div className ="options">
                            <div className ="option">
                                <h6 className ="option__head">API Integration</h6>
                            </div>
                            <div className ="option">
                                <h6 className ="option__head">Test automation</h6>
                            </div>
                            <div className ="option">
                                <h6 className ="option__head">DB optimization</h6>
                            </div>
                            <div className ="option">
                                <h6 className ="option__head">Code review</h6>
                            </div>
                        </div>
                    </div>
                    <div className ="chat-option">
                        <img className ="chat-option__icon" src={`${process.env.PUBLIC_URL}/assets/img/pencil.svg`} alt=""/>
                        <h3 className ="chat-option__header">Content Creation</h3>
                        <div className ="options">
                            <div className ="option">
                                <h6 className ="option__head">Product description</h6>
                            </div>
                            <div className ="option">
                                <h6 className ="option__head">E-mail copy</h6>
                            </div>
                            <div className ="option">
                                <h6 className ="option__head">Whitepaper</h6>
                            </div>
                            <div className ="option">
                                <h6 className ="option__head">Press release</h6>
                            </div>
                        </div>
                    </div>
                    <div className ="chat-option">
                        <img className ="chat-option__icon" src={`${process.env.PUBLIC_URL}/assets/img/bulb.svg`} alt=""/>
                        <h3 className ="chat-option__header">Idea Generation</h3>
                        <div className ="options">
                            <div className ="option">
                                <h6 className ="option__head">Brainstorming</h6>
                            </div>
                            <div className ="option">
                                <h6 className ="option__head">Brochure design</h6>
                            </div>
                            <div className ="option">
                                <h6 className ="option__head">Trend analysis</h6>
                            </div>
                            <div className ="option">
                                <h6 className ="option__head">Social media posts</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className ="chat-input">
                    <img className ="chat-input__icon" src={`${process.env.PUBLIC_URL}/assets/img/micro.svg`} alt=""/>
                    <input type="text" className ="chat-input__send"
                        placeholder="You can ask me anything! I am here to help." value={messageValue} onChange={(e) => {setMessage(e.target.value)}}/>
                    <div className ="chat-input-icons">
                        <img className ="chat-input__icon" src={`${process.env.PUBLIC_URL}/assets/img/telegram.svg`} alt=""/>
                        <img onClick={() => onSendMessage()} className ="chat-input__icon chat-top-icon__edit" src={`${process.env.PUBLIC_URL}/assets/img/pin.svg`} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}