import styled from "styled-components";
import { device, Colors } from "../../styles"

export const Container = styled.div`
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

export const Header = styled.div`
    display: flex;
    width:100%;
    text-align: left;
    line-height:23px;
`;

export const Content = styled.div`
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

export const Description = styled.div`
    display: flex;
    width:70%;
    line-height:25px;
`;

export const Title = styled.div`
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

export const SubContainer = styled.div`
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

export const Work = styled.h2`
    font-size:20px;
    float:left;
`;