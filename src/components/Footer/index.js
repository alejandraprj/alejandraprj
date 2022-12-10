import React from "react";
import { Links, FooterContainer, FooterInner, FooterIcon} from "./styles";
import Github from "./icons/github.svg";
import LinkedIn from "./icons/linkedin.svg";

const Footer = ( { background }) => {
    return (
        <>
        <FooterContainer> 
            <FooterInner>
                <Links>
                    <a href="https://github.com/alejandraprj">
                        <FooterIcon src={Github} />
                    </a>
                    <a href="https://www.linkedin.com/in/alejandraperear/">
                        <FooterIcon src={LinkedIn} />
                    </a> 
                </Links>
            </FooterInner>
        </FooterContainer>
        </>
    );
};

export default Footer;