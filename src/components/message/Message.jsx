import React from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru'
export default function Message ({text, date, userName, avatar, isMe, attachments}) {
    console.log(attachments);
    return (
        <div className = {isMe? "send-item send-item__active" : "send-item"}>
            <div className ="send-user">
                <div className = "send-user-wrap"> 
                    <img className = "send-user__logo" src={avatar}/>
                    <div className = "send-user__name">{userName}</div>
                    <span className = "send-user__time">{formatDistanceToNow(new Date(date), {addSuffix: true, locale:ruLocale})}</span>
                    <img className = "send-user__copy" src={`${process.env.PUBLIC_URL}/assets/img/copy-icon.svg`} data-action = "copy"/>
                </div>
            </div>
            <div className ="send-text">{text}</div> 
            <div className="wrap-images">
                {attachments && attachments.map(attachment => {
                    return <img className="wrap-images__img" src={attachment.url} alt={attachments.filename} />
                })}
            </div>
        </div>
    )
}