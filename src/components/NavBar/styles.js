import styled from "styled-components";
import { device, Colors } from "../../styles/index"


export const NavbarContainer = styled.div`
  width: 90%;
  height: 150px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 100000;
  @media ${device.mobileS} {
    margin-bottom: 80px;
  }
  @media ${device.tablet} {
    margin-bottom: 0px;
  }
`;

export const NavbarInner = styled.div`
  max-width: 1024px;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  @media ${device.mobileS} {
    display: block;
    width: 100%;
    padding-top: 50px;
  }
  @media ${device.tablet} {
    display: flex;
    width: 100%;
    padding-top: 0px;
  }
`;

export const Brand = styled.div`
  transition: 0.2s;
  text-decoration: none;
  font-size: 35px;
  font-weight: 600;
  color: ${Colors.primary};
  text-align: center;
  color: ${(props) => (props.background ? `${Colors.primary}` : `${Colors.primary}`)};
`;

export const Links = styled.div`
  @media ${device.mobileS} {
    display: flex;
    padding-top: 50px;
    justify-content: space-around;
  }
  @media ${device.tablet} {
    display: flex;
    padding-top: 0px;
    align-items: center;
  }
  & a {
    color: ${Colors.primary};
    font-size: 1.2rem;
    text-decoration: none;
    transition: 0.2s;
    font-weight: 600;
  }
  & a:visited {
    color: ${Colors.primary};
  }
`;

export const NavItem = styled.p`
  font-size: 23px;
  position: relative;
  margin: 0px;
  margin-left: 20px;
  margin-right: 20px;
  transition: 0.2s;
  width: fit-content;
  text-align: center;
  color: ${(props) => (props.background ? `${Colors.primary}` : `${Colors.primary}`)};
  &::after {
    content: "";
    display: block;
    width: ${(props) => (props.filled ? "100%" : "0")};
    height: 3px;
    background: ${Colors.highlight1};
    transition: width 0.3s;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover::after {
    width: 100%;
    //transition: width .3s;
  }
  &:hover a {
    color: ${Colors.primary};
  }
`;
