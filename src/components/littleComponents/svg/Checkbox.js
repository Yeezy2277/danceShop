import React from 'react';

const Checkbox = props => {
    return (
        props.active ?
            <div style={{display: "flex", alignItems: "center"}}>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.880371" width="13" height="13" rx="1.5" fill="#0572BA"/>
                    <path d="M3.5 6.79704L5.83333 9.13037L11.0833 3.88037" stroke="white"/>
                    <rect x="0.5" y="0.880371" width="13" height="13" rx="1.5" stroke="#0572BA"/>
                </svg>
                <p style={{marginLeft: "0.5vw"}}>{props.text}</p>
            </div>
            :
            <div style={{display: "flex", alignItems: "center"}}>
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="1.5" width="13" height="13" rx="1.5" stroke="#0572BA"/>
                </svg>
                <p style={{marginLeft: "0.5vw"}}>{props.text}</p>
            </div>
    );
};

export default Checkbox;
