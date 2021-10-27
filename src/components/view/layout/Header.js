import React, {useContext, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import Logo from "../../littleComponents/svg/Logo";
import Currency from "../../littleComponents/svg/Currency";
import {COLORS} from "../../constants/Colors";
import {useTranslation} from "react-i18next";
import {Context} from "../../reducers/store";

const Header = () => {
    const { t, i18n } = useTranslation();
    const [state, dispatch] = useContext(Context);
    const [isAuthScreen, setAuthScreen] = useState(false);
    const onChangeLanguage = () => {
        i18n.language === "ru" ? i18n.changeLanguage("en") : i18n.changeLanguage("ru")
    }
    const onChangeCurrency = currency => {
        currency === "rub" ? dispatch({type: "SET_RUB_CURRENCY"}) : currency === "dollar" ? dispatch({type: "SET_DOLLAR_CURRENCY"})
            : dispatch({type: "SET_EURO_CURRENCY"})
    }
    const styles = {
        container: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 40,
            marginBottom: 24,
            marginLeft: "5%",
            marginRight: "5%",
        },
        rightBlock: {
            display: "flex",
            alignItems: "center"
        },
        button: {
            outline: "none",
            border: "none",
            background: "none",
            cursor: "pointer",
        },
        link: {
            color: COLORS.Black,
            textDecoration: "none",
        }
    }
    return (
        <div style={{borderBottom: "1px solid rgba(126, 134, 142, 0.2)"}}>
            <div style={styles.container}>
                <div>
                    <Logo/>
                </div>
                <div style={styles.rightBlock}>
                    <button style={styles.button} onClick={() => setAuthScreen(true)} onBlur={() => setAuthScreen(false)}>
                        <p style={{marginRight: "1vw", fontFamily: "Montserrat", fontWeight: "500", ...styles.link}} >{t('login')}</p>
                    </button>
                    <p style={{marginLeft: "1vw", fontSize: ".88em"}}>{t('language')}</p>
                    <button onClick={onChangeLanguage} style={{marginLeft: "0.5vw", fontWeight: 600, ...styles.button}}>RU/EN</button>
                    <button onClick={() => onChangeCurrency("rub")} style={{marginLeft: "0.5vw", ...styles.button}}>
                        <Currency type={"rub"}/>
                    </button>
                    <button onClick={() => onChangeCurrency("dollar")} style={styles.button}>
                        <Currency type={"dollar"}/>
                    </button>
                    <button onClick={() => onChangeCurrency("euro")} style={styles.button}>
                        <Currency type={"euro"}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
