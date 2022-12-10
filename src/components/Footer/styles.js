import styled from "styled-components";
import { device, Colors } from "../../styles/index"

export const FooterContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  padding-top: 30px;
  justify-content: center;
  position: relative;
  z-index: 100000;
`;

export const FooterInner = styled.div`
  max-width: 1024px;
  height: 100%;
  align-items: center;
  @media ${device.mobileS} {
    width: 80%;
    display: block;
  }
  @media ${device.tablet} {
    width: 100%;
    display: inline-block;
  }
`;

export const Links = styled.div`
  @media ${device.mobileS} {
    width: 100%;
    display: block;
    justify-content: space-between;
  }
  & a {
    color: ${Colors.primary};
    font-size: 1.2rem;
    text-decoration: none;
    transition: 0.2s;
    font-weight: 600;
  }
  & a:visited {
    color: black;
  }
`;

export const FooterIcon = styled.img`
    height: 35px;
    max-width: 35px;
    @media ${device.mobileS} {
      margin: 0 30px;
      display: inline-block;
      float: right;
    }
    @media ${device.tablet} {
      margin: 0 30px;
      display: inline-block;
      float: right;
    }
`
