import React from 'react';
import Search from "../../littleComponents/Search";
import MyButton from "../../littleComponents/Button";
import {useTranslation} from "react-i18next";

const Card = () => {
    const {t, i18n} = useTranslation();
    const styles = {
        container: {
            marginTop: "4vh",
            paddingLeft: "2.5vw",
            paddingRight: "2.5vw",
        },
        searchContainer: {
            display: "flex",
            justifyContent: "space-between",
            gridRow: "1/1"
        },
        searchButton: {
            gridColumn: "2/3",
            gridArea: "searchButton"
        },
    }
    return (
        <div style={styles.container}>
            <div style={styles.searchContainer}>
                <div style={styles.search}>
                    <Search placeholder={t('searchAds')} width={"65vw"}/>
                </div>
                <div style={styles.searchButton}>
                    <MyButton title={t('search')} width={"16vw"}/>
                </div>
            </div>
        </div>
    );
};

export default Card;
