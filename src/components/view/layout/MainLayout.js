import React, {useContext, useEffect, useState} from 'react';
import Header from "./Header";
import {Route} from "react-router";
import Home from "../Home/Home";
import Footer from "./Footer";
import {Context} from "../../reducers/store";
import Auth from "../Auth/Auth";

const MainLayout = () => {
    const [state, dispatch] = useContext(Context);
    const [isAuthPage, setAuthPage] = useState(false);
    useEffect(() => {
        state.isAuthPage ? setAuthPage(true) : setAuthPage(false);
    }, [state])
    return (
        <div className={isAuthPage ? "pp" : "App"}>
            {!isAuthPage ? <Header/> : null}
            {/*<Route path="/" component={Home}/>*/}
            <Route path="/home" component={Home}/>
            <Route path="/login" component={Auth}/>
            {!isAuthPage ? <Footer/> : null}
        </div>
    );
};

export default MainLayout;
