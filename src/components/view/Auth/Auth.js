import React, {useContext, useEffect} from 'react';
import {Context} from "../../reducers/store";
import Search from "../../littleComponents/Search";

const Auth = () => {
    const [state, dispatch] = useContext(Context);
    useEffect(() => {
        dispatch({type: "IS_AUTH_PAGE", isAuthPage: true})
    }, [dispatch, state])
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        title: {
            fontSize: 36,
            fontWeight: "600"
        }
    }
    return (
        <div style={styles.container}>
            <p style={styles.title}>Вход</p>
            <Search width={"60vw"}/>
        </div>
    );
};

export default Auth;
