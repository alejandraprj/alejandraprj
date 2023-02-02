import React from "react";

import cv from "./cv/PereaRojas-Resume.pdf";


class Resume extends React.Component {
    render () {
        return ( 
            window.open(cv, "_self")
        )
    }
};
export default Resume;
