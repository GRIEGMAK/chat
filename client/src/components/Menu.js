import React from 'react';
import auth from "../store/auth";
import {NavLink} from "react-router-dom";

const Menu = () => {
    const { logout } = auth
    const pages=[
        {page: "Рабочая переписка", link:"/01work"},
        {page: "Всякий хлам", link: "/02hlam"},
        {page: "Все сообщения", link: "/03all"}
    ]
    return(
        <div>
            {pages.map(p => <div><NavLink to={p.link}>{p.page}</NavLink></div>)}
            <button onClick={logout}>Выйти</button>
        </div>
    )
}

export default Menu;

