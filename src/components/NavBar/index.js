import React from "react";
import { Link } from "react-router-dom";
import { Links, 
         Brand, 
         NavbarContainer, NavbarInner, NavItem 
       } from "./styles";


const NavBar = ({ background }) => {
    return (
        <>
        <NavbarContainer> 
            <NavbarInner>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Brand background={background}>
                        alejandra
                    </Brand> 
                </Link>
                <Links>
                    <Link to="/contactme">
                        <NavItem background={background}>      
                            contact me
                        </NavItem>
                    </Link>
                </Links>
            </NavbarInner>
        </NavbarContainer>
        </>
    );
};

export default NavBar;