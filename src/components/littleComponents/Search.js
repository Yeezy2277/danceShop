import React, {useState} from 'react';
import {COLORS} from "../constants/Colors";

const Search = props => {
    const [isFocus, setFocus] = useState(false);
    const styles = {
        common: {
            fontSize: "1.1em",
            borderRadius: 8,
            outline: "none",
            border: `2px solid ${isFocus ? COLORS.DarkBlue : COLORS.Blue}`,
            color: "rgba(51,51,51,0.5)",
            paddingLeft: "2vw",
            paddingRight: "1vw",
            paddingTop: 10,
            paddingBottom: 11,
            width: props.width,
            gridArea: props.gridArea,
            gridColumn: props.gridColumn,
            gridRow: props.gridRow
        }
    }
    return (
        <input style={styles.common} placeholder={props.placeholder} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
               value={props.value} onChange={props.onChange}/>
    );
};

export default Search;
