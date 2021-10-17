import React, {useContext, useEffect, useState} from 'react';
import Search from "../../littleComponents/Search";
import MyButton from "../../littleComponents/Button";
import {useTranslation} from "react-i18next";
import {COLORS} from "../../constants/Colors";
import Checkbox from "../../littleComponents/svg/Checkbox";
import useWindowDimensions from "../../utils/useWindowDimensions";
import HomeCard from "./HomeCard";
import {Context} from "../../reducers/store";


const Home = props => {
    const {t, i18n} = useTranslation();
    const [state, dispatch] = useContext(Context);
    const {height, width} = useWindowDimensions();
    const [checkboxes, setCheckboxes] = useState({clothes: true, shoes: false});
    const [isSizeScreen, setSizeScreen] = useState("high");
    const updateCheckbox = (checkbox) => {
        let object = {...checkboxes}
        for (let key in object) {
            object[key] = false;
            if (key === checkbox) {
                object[checkbox] = true;
                setCheckboxes(object);
            }
        }
    }
    useEffect(() => {
        dispatch({type: "IS_AUTH_PAGE", isAuthPage: false})
    }, [dispatch, state])
    useEffect(() => {
        width <= 960 ? setSizeScreen("low") : width <= 1300 ? setSizeScreen("medium") : setSizeScreen("high");
    }, [width])
    const fields = [
        {
            id: 1, title: t('styles'), data: 'styleArray'
        },
        {
            id: 2, title: t('clothes'), data: 'dresses'
        },
        {
            id: 3, title: t('clothesSize'), data: 'sizeClothes'
        },
        {
            id: 4, title: t('height'), data: 'heightArray'
        },
        {
            id: 5, title: t('shoes'), data: 'typeShoes'
        },
        {
            id: 6, title: t('shoeSize'), data: 'sizeShoes'
        },
        {
            id: 7, title: t('adType'), data: 'typeAds'
        },
        {
            id: 8, title: t('state'), data: 'states'
        },
        {
            id: 9, title: t('color'), data: 'colors'
        },
        {
            id: 10, title: t('country'), data: 'countries'
        },
        {
            id: 11, title: t('city'), data: 'cities'
        }
    ]
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
        sortContainer: {
            marginTop: "2vh",
            display: "flex",
            justifyContent: "space-between"
        },
        sortButtons: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around"
        },
        sortButton: {
            marginLeft: "1vw",
            marginRight: "1vw",
            outline: "none",
            backgroundColor: COLORS.White,
            border: `1px solid ${COLORS.Blue}`,
            borderRadius: 25,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 10,
            paddingRight: 10
        },
        checkboxes: {
            display: "flex",
            alignItems: "center",
        },
        checkbox: {
            outline: "none",
            backgroundColor: "white",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center"
        },
        contentBlock: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "5vw"
        },
        pickerBlock: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start"
        },
        itemBlock: {
            width: "70vw",
            display: "grid",
            gridColumnGap: 20,
            gridRowGap: "10vw",
            gridTemplateColumns: `repeat(${isSizeScreen === "high" ? "3" : isSizeScreen === "medium" ? "2" : "1"},1fr)`,
            justifyContent: "center",
        }
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
            <div style={styles.sortContainer}>
                <p>{t('advancedSearch')}</p>
                <div style={styles.sortButtons}>
                    <p style={{marginRight: "1vw"}}>{t('sort')}</p>
                    <button style={styles.sortButton}>{t("last")}</button>
                    <button style={styles.sortButton}>{t("price")} min</button>
                    <button style={styles.sortButton}>{t("price")} max</button>
                </div>
                <p/>
            </div>
            <div style={styles.checkboxes}>
                <button style={styles.checkbox} onClick={() => updateCheckbox("clothes")}>
                    <Checkbox active={checkboxes.clothes}/>
                    <p>{t('clothes')}</p>
                </button>
                <button style={{marginLeft: "1vw", ...styles.checkbox}}
                        onClick={() => updateCheckbox("shoes")}>
                    <Checkbox active={checkboxes.shoes}/>
                    <p>{t('shoes')}</p>
                </button>
            </div>
            <div style={styles.contentBlock}>
                <div style={styles.pickerBlock}>
                    {fields.map(item => {
                        return <div>
                            <p style={{textAlign: "left"}}>{item.title}</p>
                            <select>
                                {optionNames[item.data].map(key => {
                                    return <option value={key}>{t(`${item.data}.${[key]}`)}</option>
                                })}
                            </select>
                        </div>
                    })}
                    <div style={{marginTop: "7vh"}}>
                        <MyButton width={"32vh"} title={t("apply")}/>
                    </div>
                </div>
                <div style={styles.itemBlock}>
                    <HomeCard description="Детское платье"/>
                    <HomeCard description="Детское платье"/>
                    <HomeCard description="Детское платье"/>
                    <HomeCard description="Детское платье"/>
                    <HomeCard description="Детское платье"/>
                    <HomeCard description="Детское платье"/>
                </div>
            </div>
        </div>
    );
};

const optionNames = {
    styleArray: ["latina", "standard", "kids", "tango", "flamenko", "jazz", "goGo", "national"],
    dresses: ["dress", "shirt", "tailcoat", "pants", "vest", "body", "blouse", "tunic", "topic", "turtleneck", "shorts", "skirt", "overalls", "smoking"],
    sizeClothes: ["S", "M", "L", "XL"],
    heightArray: ["116-122", "122-128", "128-134", "134-140", "140-146", "146-152", "152-158", "158-164", "164-170", "170-176", "176-182", "182-188", "188-194"],
    countries: ["Russia", "Belarus", "GB"],
    cities: ["Moscow", "Anapa", "Babaevo", "Vidnoe", "Gubkin", "Dolinsk"],
    colors: ["all", "red", "blue", "green", "pink", "lightBlue", "orange", "gold"],
    states: ["all", "new", "used"],
    sizeShoes: ["5", "6", "7", "8", "9"],
    typeShoes: ["shoes", "strips", "jazzShoes"],
    typeAds: ["all", "sell", "rent", "free"],
}

export default Home;
