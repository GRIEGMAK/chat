import React from 'react'
import {Switch, Route} from "react-router";
import Header from "./Header";
import MainPart from "./MainPart";
import wordCommunication from "../store/wordCommunication";
import store from "../store/Hlam";
import AuthPage from "./AuthPage";
import {NavLink, Redirect} from "react-router-dom";
import s from "../styles/routes.module.sass"
import Menu from "./Menu";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        const messages = () => {
            store.setMessage()
            wordCommunication.setMessage()
        }
        messages()
        return (
            <div>
                <Menu/>
                <Switch>
                    <Route exact path="/00first">
                    </Route>
                    <Route exact path="/01work">
                        <Header headerName="Рабочая переписка"/>
                        <MainPart store={wordCommunication}/>
                    </Route>
                    <Route exact path="/02hlam">
                        <Header headerName="Хлам"/>
                        <MainPart store={store}/>
                    </Route>
                    <Route exact path="/03all">
                        <div className={s.header}>
                            <div>
                                <Header headerName="Хлам"/>
                                <MainPart store={store}/>
                            </div>
                            <div>
                                <Header headerName="Рабочая переписка"/>
                                <MainPart store={wordCommunication}/>
                            </div>
                        </div>
                    </Route>
                    <Redirect from="/" to="/00first"/>
                </Switch>
            </div>
        )
    } else {
        return (
            <Switch>
                <Route exact path="/">
                    <AuthPage/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        )
    }

}