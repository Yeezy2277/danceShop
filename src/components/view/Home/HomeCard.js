import React from 'react';
import {COLORS} from "../../constants/Colors";
import Heart from "../../littleComponents/svg/Heart";
import Currency from "../../littleComponents/svg/Currency";

const HomeCard = props => {
    const styles = {
        button: {
            width: "30vh",
            height: "30vh",
            border: `1px solid ${COLORS.LightGray}`,
            outline: "none",
            borderRadius: 8,
            backgroundImage: "url(https://i.imgur.com/dRa9HMc.png)",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "flex-end",
            padding: 0
        },
        adType: {
            marginTop: "3vh",
            width: "16vh",
            height: "9vh",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='137' height='47' viewBox='0 0 137 47' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.2361 8.64729C5.91246 3.69314 10.1441 0 15.1442 0H22V47H5.72901C2.69876 47 0.365061 44.326 0.774963 41.3237L5.2361 8.64729Z' fill='%23F2F6FA'/%3E%3Crect width='115' height='47' transform='translate(22)' fill='%23F2F6FA'/%3E%3C/svg%3E%0A")`,
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        textAdType: {
            fontSize: "1.1em",
            fontFamily: "Montserrat, sans-serif",
            paddingBottom: "3vh"
        },
        description: {
            display: "flex",
            alignItems: "center",
            fontSize: ".88em",
            marginTop: "1.5vh"
        },
        like: {
            outline: "none",
            backgroundColor: "white",
            border: "none",
            marginLeft: "11vh"
        },
        currency: {
            display: "flex",
        }

    }
    return (
        <div>
            <button style={styles.button}>
                <div style={styles.adType}>
                    <p style={styles.textAdType}>Продажа</p>
                </div>
            </button>
            <div style={styles.description}>
                <p>{props.description}</p>
                <button style={styles.like}>
                    <Heart active={props.active}/>
                </button>
            </div>
            <div style={styles.currency}>
                <Currency type="rub"/>
                <p style={{marginLeft: "0.5vw", fontWeight: 700, fontSize: "1.1em", lineHeight: 0}}>1000 руб</p>
            </div>
        </div>
    );
};

export default HomeCard;
