import React, {useState} from 'react';
import {COLORS} from "../constants/Colors";


const MyButton = props => {
    const [isMouseEnter, setMouseEnter] = useState(false);
    const styles = {
        button: {
            borderRadius: 8,
            width: props.width ? props.width : 200,
            height: props.height ? props.height : 48,
            backgroundColor: props.disabled ? COLORS.LightGray : isMouseEnter ? COLORS.DarkBlue : COLORS.Blue,
            fontWeight: 500,
            fontSize: "1.1em",
            color: COLORS.White,
            border: "none",
            cursor: "pointer",
            gridArea: props.gridArea,
            gridColumn: props.gridColumn,
            gridRow: props.gridRow,
            marginTop: props.marginTop
        }
    }
    return (
        <div>
            <button onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)}
                    onClick={props.onClick} style={styles.button} disabled={props.disabled}>{props.title}</button>
        </div>
    );
};


export default MyButton;
