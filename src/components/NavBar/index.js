import React from "react";
import { Link } from "react-router-dom";
import { Links, 
         Brand, 
         NavbarContainer, NavbarInner, NavItem 
       } from "./styles";


const NavBar = () => {
    return (
        <>
        <NavbarContainer> 
            <NavbarInner>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Brand >
                        alejandra
                    </Brand> 
                </Link>
                <Links>
                    <Link to="/contactme">
                        <NavItem>      
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