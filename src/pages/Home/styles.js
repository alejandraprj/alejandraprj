import styled from "styled-components";
import { Colors, device } from "../../styles/index";

export const Intro = styled.div`
    width:90%;
    max-width: 1100px;
    margin: 50px auto;
    @media ${device.mobileS}{
        font-size: 13px;
    }
    @media ${device.tablet}{
        font-size: 18px;
    }
    display: block;
`;

export const B = styled.div`
    width: 100%;
    display: table;
    height: auto;
    margin: 0px;
    padding: auto;
    height: 50px;
`;

export const LB = styled.div`
    display: table-cell;
    float: left;
    vertical-align: middle;
    position: relative;
    line-height: 50px;
`;

export const RB = styled.div`
    display: table-cell;
    float: right;
    text-align: bottom;
    vertical-align: middle;
    & u {
        vertical-align: middle;
    }
    line-height: 25px;
    padding-top: 18px;
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

export const Bar = styled.div`
    white-space: nowrap;
    -ms-overflow-style: none;
    scrollbar-color: transparent transparent;
    & ::-webkit-scrollbar {
        display: none;
    }
    max-height:400;
    width: 100%;
    @media ${device.mobileS} {
        display: inline-block;
        float: center;
        justify-content: center;
        overflow-x: scroll;
        scroll-snap-type: y mandatory;
        scroll-snap-stop: always-stop-odd;
    }
    @media ${device.tablet} {
        overflow: auto;
        display: inline-block;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        scroll-snap-stop: always-stop-odd;
    }
    
`;

export const Item = styled.div`
    width: 450px;
    max-height:300px;
    margin: 0 40px 0 10px;
    white-space:normal;
    text-align:justify;
    height: 300px;
    display: inline-block;
    @media ${device.mobileS}{
        scroll-snap-align: center;
    }
    @media ${device.tablet}{
        scroll-snap-align: center;
    }
`;

export const Title = styled.h1`
    font-size:30px;
    margin: 0px;
`;

export const SubTitle = styled.h2`
    font-size:20px;
    float:left;
`;

export const Link = styled.div`
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
    display:flex;
    width:30%;
    line-height:35px;
    margin: 20px 0 0 0;
    & p {
        margin: 0 0 10px 0;
        line-height:25px;
    }
`;

export const P = styled.div`
    display: flex;
    width:70%;
    line-height:25px;
`;

export const Pub = styled.img`
    height: 300px;
    margin: 30px;
    @media ${device.mobileS} {
        display: block;
        margin-left: auto;
        margin-right: auto;
        height: 400px;
    }
    @media ${device.tablet} {
        display: inline-block;
        margin: 30px;
        height: 300px;
    }
`;

export const Pubs = styled.div`
    width: 100%;
    @media ${device.mobileS} {
        display: inline-block;
        float center;
        justify-content: center;
        overflow: hidden;
    }
    @media ${device.tablet} {
        white-space: nowrap;
        overflow: auto;
        display: inline-block;
    }
`;

export const MiniDescr = styled.div`
    @media ${device.mobileS} {
        display: none;
    }
    @media ${device.tablet} {
        display: inherit;
    }
`;
