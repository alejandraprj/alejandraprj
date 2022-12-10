
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
    bgImage: "linear-gradient(to left, #4E313C, #5e3b48)",
    primary: '#EBE9F0',
    dark: '#12121c',
 };

 export const Line = styled.div`
    height: 1px; 
    width: 100%; 
    background-color: white; 
    border: none; 
    margin: auto; 
    margin-top: 10px; 
    margin-bottom: 18px;"
 `;

export const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 300px;
`;