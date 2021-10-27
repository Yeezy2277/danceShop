import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../reducers/store";
import Search from "../../littleComponents/Search";
import Checkbox from "../../littleComponents/svg/Checkbox";
import {COLORS} from "../../constants/Colors";
import {NavLink} from "react-router-dom";
import MyButton from "../../littleComponents/Button";
import GoogleLogin from "react-google-login";

const Auth = () => {
    const [state, dispatch] = useContext(Context);
    const [active, setActive] = useState(true);
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
        },
        button: {
            outline: "none",
            border: "none",
            backgroundColor: COLORS.White,
        },
        links: {
            width: "60vw",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        link: {
            textDecoration: "none",
            color: COLORS.Blue
        },
        bottomText: {
            color: "rgba(51, 51, 51, 0.7)",
            lineHeight: "1.3em",
            fontSize: "0.88em",
            width: "50%",
            textAlign: "center"
        }
    }
    return (
        <div style={styles.container}>
            <div style={{width: "60vw", ...styles.container}}>
                <p style={styles.title}>Вход</p>
                <Search width={"60vw"} placeholder={"+7 495 999-77-78"}/>
                <Search width={"60vw"} marginTop={"4vh"} placeholder={"----------------------"}/>
                <div style={styles.links}>
                    <button style={styles.button}>
                        <Checkbox active={active} text={"Запомнить пароль"}/>
                    </button>
                    <NavLink style={styles.link} to={"/restore"}>Забыли пароль?</NavLink>
                </div>
                <MyButton marginTop={"5vh"} width={"58.8vw"} title={"Войти"}/>
                <p style={{marginTop: "3vh"}}>или продолжить через</p>
                <GoogleLogin
                    clientId="437107269550-6i4qctnd5o45c52nfr0h9rp2md70hfbi.apps.googleusercontent.com"
                    render={renderProps => (
                        <button style={{outline: "none", border: "none", backgroundColor: "white"}} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0001 24.2198C19.1966 24.2198 24.2199 19.1965 24.2199 13C24.2199 6.80343 19.1966 1.78015 13.0001 1.78015C6.80355 1.78015 1.78027 6.80343 1.78027 13C1.78027 19.1965 6.80355 24.2198 13.0001 24.2198Z" fill="white"/>
                                <path d="M13 23.9999C19.0751 23.9999 24 19.075 24 12.9999C24 6.92475 19.0751 1.99988 13 1.99988C6.92487 1.99988 2 6.92475 2 12.9999C2 19.075 6.92487 23.9999 13 23.9999Z" fill="#DC4A3D"/>
                                <path d="M18.5868 11.9097C18.6599 12.2989 18.6989 12.706 18.6989 13.1309C18.6989 16.4532 16.4743 18.816 13.1154 18.816C9.902 18.816 7.29956 16.2135 7.29956 13.0001C7.29956 9.78664 9.902 7.1842 13.1154 7.1842C14.686 7.1842 15.9982 7.76189 17.0049 8.70033L15.3652 10.34V10.3359C14.7551 9.75414 13.9807 9.45595 13.1154 9.45595C11.1963 9.45595 9.63712 11.0769 9.63712 12.9968C9.63712 14.916 11.1963 16.541 13.1154 16.541C14.8566 16.541 16.0412 15.5448 16.2858 14.1782H13.1154V11.9097H18.5868Z" fill="white"/>
                            </svg>
                        </button>
                    )}
                    buttonText="Login"
                    onSuccess={() => console.log("success")}
                    onFailure={() => console.log("fail")}
                    cookiePolicy={'single_host_origin'}
                />
                <NavLink style={{fontSize: "1.1em", marginTop: "3vh", ...styles.link}} to={"/restore"}>Зарегистрироваться</NavLink>
                <p style={styles.bottomText}>При входе вы подтверждаете согласие с <NavLink style={{fontFamily: "Montserrat", ...styles.bottomText}} to={"/policy"}>условиями
                    использования сайта и политикой о данных пользователей.</NavLink>
                </p>
            </div>
        </div>
    );
};

export default Auth;
