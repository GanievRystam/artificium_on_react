import React, { useEffect } from "react";


export default function Users()  {
    return (

        <div className="menu-user-list">
            <h3 className="menu-user-list__header">Пользователи</h3>
                <li  className="menu-user-list__item"><img
                className="menu-user-list__icon" src={`${process.env.PUBLIC_URL}/assets/img/triangle.svg`} alt=""/>Кто-то</li>
            <li className="menu-user-list__item menu-user-list__item_add"><img
                    className="menu-user-list__icon menu-user-list__icon_add" src={`${process.env.PUBLIC_URL}/assets/img/plus-circle.svg`}
                    alt=""/> Add new user</li>
        </div>
                    
    )
}