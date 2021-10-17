import React from 'react';
import {COLORS} from "../../constants/Colors";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t, i18n } = useTranslation();
    const styles = {
        container: {
            backgroundColor: COLORS.LightBlue,
            display: "flex",
            paddingLeft: "6%",
            paddingTop: "9vh",
            paddingBottom: "9vh"
        },
        link: {
            fontSize: ".75em",
            fontWeight: 600,
            color: COLORS.White,
            textDecoration: "none"
        }
    }
    return (
        <div style={styles.container}>
            <NavLink style={{marginRight: 21.5, ...styles.link}} to={"/qq"}>{t('home')}</NavLink>
            <NavLink style={{marginLeft: 21.5, marginRight: 21.5, ...styles.link}} to={"/qq"}>{t('aboutUs')}</NavLink>
            <NavLink style={{marginLeft: 21.5, marginRight: 21.5, ...styles.link}} to={"/qq"}>{t('privacy')}</NavLink>
        </div>
    );
};

export default Footer;
