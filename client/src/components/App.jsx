import React, {useEffect} from 'react';
import { BrowserRouter } from "react-router-dom";
import {observer} from "mobx-react";
import {useRoutes} from "./routes";
import authStore from "../store/auth";

const App = () => {
    const {isAuthenticated, checked } = authStore
    const routes = useRoutes(isAuthenticated)
    useEffect(()=>checked())
    return (
            <BrowserRouter>
                {routes}
            </BrowserRouter>
    )
};

export default observer(App);
