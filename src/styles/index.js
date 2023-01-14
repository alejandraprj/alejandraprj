import React from "react";
import styled from "styled-components";

const size = {
    mobileS: "0px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    tabletL: "992px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
};

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    tabletL: `(min-width: ${size.tabletL})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
};

export const Colors = {
    altBg: "linear-gradient(to left, #2A5470, #4C4177)",
    bgImage: "linear-gradient(to left, #b86a30,#35488c)",
    primary: '#EBE9F0',
    dark: '#12121c',
    darkfield: 'rgba(67, 35, 59, 0.45)'
};

export const StyledP = styled.p`
    font-size: 16px;
    font-family: 'Fira Code';
    text-align: center;
    max-width: 800px;
`;

export const Img = styled.img`
    max-width: 100%;
    max-height: 400px;
    width: auto;
    margin: 0 auto;
    display: block;
    position: relative;
    border-radius: 4px;
    margin-bottom:30px;
`;

const LineStyle = styled.div`
    height: 1px; 
    width: 100%; 
    background-color: white; 
    border: none; 
    margin: auto; 
    margin-top: 10px; 
    margin-bottom: 18px;"
`;

export const Line = () => {
    return(<LineStyle></LineStyle>);
};

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
`;

export const MegaContainer = styled.html`
    background-image: ${Colors.bgImage};
    padding: 3%;
    box-sizing: border-box;
    color: rgb(238,232,244);
    min-height: 100vh;
    font-size: 15px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 200px;
    font-family:'Oxygen';
`;

export const RHS = styled.div`
    float: right;
`;
