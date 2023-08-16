import styled from "styled-components";
import { Colors } from "../../styles/index.js";

export const Container = styled.div`
    max-width: 1024px;
    width: 100%
    align-self: center;
`;

export const Form = styled.form`
    max-width: 444px;
    width: 95%;
    & button {
        float: center;
        margin: auto;
        margin-top: 15px;
    }
    & button:hover {
        cursor: pointer;
    }
`;

export const Field = styled.div`
    width: 100%;
    display: flex;
    white-wrap: normal;
    display: inline-block;
    margin-top: 20px;
    
    & label, input, textarea {
        width: 100%;
        position: relative;
        display: block;
        margin: auto;
        font-size: 18px;
    }
    & input, textarea {
        padding: 7px;
        background-color: ${Colors.darkfield};
        color: white;
        border-radius: 2px;
    }

    & label {
        margin-bottom: 8px;
    }
    & input {
        margin-bottom: 15px;
        height: 22px;
    }

    & textarea {
        height: 100px;
    }
`

export const Button = styled.button`
    width: 80px;
    position: relative;
    display: block;
    margin: auto;
`
