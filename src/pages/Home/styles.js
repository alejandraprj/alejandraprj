import styled from "styled-components";
import { Colors, device } from "../../styles/index";

export const Intro = styled.div`
    width:100%;
    max-width: 1024px;
    margin: 50px auto;
    line-height: 25px;
    @media ${device.mobileS}{
        font-size: 13px;
    }
    @media ${device.tablet}{
        font-size: 18px;
    }
    display: block;
`;

export const Experience = styled.div`
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    min-height: 50vh;
    width: 100%;
    justify-content: left;
    position: relative;
    max-width: 1024px;
    font-family: 'Fira Code';
    font-size: 15px;
    & b {
        display: inline;
    }
    & p {
        float:right;
    }
`;

export const Title = styled.h1`
    font-size:30px;
    margin-top: 40px;
`;

export const SubTitle = styled.h2`
    font-size:20px;
    float:left;
`;

export const Linkk = styled.div`
    text-decoration:none;
    color:${Colors.primary};
      & a {
        color:${Colors.primary};
        text-decoration:none;
        transition:0.2s;
        font-weight:600;
      }
      & a:hover {
        font-weight:800;
      }
      & a:visiter {
        color:${Colors.primary};
      }
`;

export const Descr = styled.div`
    max-width:1000px;
    text-align: justify;
    font-size: inherit;
    font-weight: 400;
    display: flex;
    width: 100%;
    height: auto;
    margin: 0 0 40px 0;
    white-space: no-wrap;
`;

export const Date = styled.div`
    display: flex;
    width:40%;
    text-align: left;
    justify: none;
    line-height:28px;
    margin: 0;
    & p {
        margin: 0 0 10px 0;
        line-height:23px;
    }
`;

export const Header = styled.div`
    display: flex;
    width:100%;
    text-align: left;
    line-height:23px;
`;

export const P = styled.div`
    display: flex;
    width:70%;
    line-height:25px;
`;

export const Bar = styled.div`
    white-space: nowrap;
    -ms-overflow-style: none;
    max-height:300;
    width: 100%;
    height: inherit;
    @media ${device.mobileS} {
        max-height: 350px;
        overflow: auto;
        display: inline-block;
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
        scroll-snap-stop: always-stop-odd;
        scrollbar-color: black;
    }
    @media ${device.tablet} {
        overflow: auto;
        display: inline-block;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        scroll-snap-stop: always-stop-even;
    }
    & ::-webkit-scrollbar {
        display: none;
    }
`;

export const Item = styled.div`
    white-space: normal;
    text-align: justify;
    @media ${device.mobileS}{
        display: block;
        margin: 30px auto;
        height: 350px;
        width: 90%;
        scroll-snap-align: center;
    }
    @media ${device.tablet}{
        display: inline-block;
        width: 400px;
        height: 300px;
        margin: 0 40px 0 10px;
        scroll-snap-align: center;
    }
`;

export const ItemIm = styled.img`
    white-space: normal;
    @media ${device.mobileS}{
        display: block;
        margin: 30px auto;
        height: 350px;
        scroll-snap-align: center;
    }
    @media ${device.tablet}{
        display: inline-block;
        margin: 30px;
        height: 300px;
        width: auto;
        margin: 0 40px 0 10px;
        scroll-snap-align: center;
    }
`;
