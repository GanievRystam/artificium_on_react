import React, { useEffect } from "react";


export default function Users({users, messages, userName, roomId})  {
    return (
        <div className="menu">
                    <div className="menu-user">
                        <div className="menu-user-list menu-user-logo">
                            <img className="menu-user__img" src={`${process.env.PUBLIC_URL}/assets/img/Avatar-1.png`} alt="User"/>
                            <div className="menu-user-name">
                                <h4 className="menu-user-name__head">Проект: {roomId}</h4>
                                <div className="menu-user-name__members"><span
                                        className="menu-user-name__members_count">
                                            {!users ? '0 ' : users.users?.length}   
                                              </span>
                                      members</div>
                            </div>
                        </div>
                        <div className="menu-user-list">
                            <h3 className="menu-user-list__header">GENERAL</h3>
                            <li className="menu-user-list__item"><img className="menu-user-list__icon chat-icon"
                                    src={`${process.env.PUBLIC_URL}/assets/img/search.svg`} alt=""/> Search</li>
                            <li className="menu-user-list__item "><img className="menu-user-list__icon"
                                    src={`${process.env.PUBLIC_URL}/assets/img/credit-card.svg`} alt=""/> Billing</li>
                        </div>
                        <div className="menu-user-list">
                            <h3 className="menu-user-list__header">Пользователи</h3>
                            { users.users?.map((user, index) => {
                                return(
                                <li key={index} className="menu-user-list__item"><img
                                className="menu-user-list__icon" src={`${process.env.PUBLIC_URL}/assets/img/triangle.svg`} alt=""/> {user}</li>)
                            })}
                            <li className="menu-user-list__item menu-user-list__item_add"><img
                                    className="menu-user-list__icon menu-user-list__icon_add" src={`${process.env.PUBLIC_URL}/assets/img/plus-circle.svg`}
                                    alt=""/> Add new user</li>
                        </div>
                    </div>
                    <div className="user-bottom menu-user-list__item-active">
                        <img className="user-bottom__logo" src={`${process.env.PUBLIC_URL}/assets/img/Avatar-1.png`} alt="Your User"/>
                        <div className="user-bottom-text">
                            <h5 className="user-bottom-text__name menu-user-name__head">{userName}</h5>
                            <span className="user-bottom-text__status menu-user-name__members">Premium</span>
                        </div>
                        <img className="user-bottom-text__setting" src={`${process.env.PUBLIC_URL}/assets/img/cog.svg`} alt="Setting "/>
                    </div>
                </div>
    )
}