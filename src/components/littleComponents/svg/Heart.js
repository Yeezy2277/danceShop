import React from 'react';

const Heart = props => {
    return (
        props.active ?
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.28782 14.0118C-0.477683 8.28856 7.23457 0.633727 13.0001 6.35589C18.7656 0.633727 26.4778 8.28856 20.7123 14.0118L13.0001 21.6666L5.28782 14.0118Z" stroke="#D10085" stroke-width="2" stroke-linecap="round"/>
            </svg> :
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.28782 14.0118C-0.477683 8.28856 7.23457 0.633727 13.0001 6.35589C18.7656 0.633727 26.4778 8.28856 20.7123 14.0118L13.0001 21.6666L5.28782 14.0118Z" fill="#D10085" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
    );
};

export default Heart;
