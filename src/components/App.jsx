import React from 'react';
import MainPart from "./MainPart";
import Header from "./Header";
import store from '../store/Hlam'
import wordCommunication from "../store/wordCommunication";
import {BrowserRouter, NavLink, Redirect, Route, Switch} from "react-router-dom";

const App = () => {
    const pages=[
        {page: "Рабочая переписка", link:"/first"},
        {page: "Всякий хлам", link: "/hlam"},
        {page: "Открыть все", link: "/all"}
    ]
    return (
        <BrowserRouter>
            <Redirect to="/" from="/first" />
            {pages.map(p => <div><NavLink to={p.link}>{p.page}</NavLink></div>)}
            <Switch>
                <Route exact path="/first">
                    <Header headerName="Рабочая переписка"/>
                    <MainPart store={wordCommunication}/>
                </Route>
                <Route exact path="/hlam">
                    <Header headerName="Хлам"/>
                    <MainPart store={store}/>
                </Route>
                <Route exact to="/all">
                    <Header headerName="Все переписки"/>
                    <MainPart store={wordCommunication}/>
                    <MainPart store={store}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default App;
