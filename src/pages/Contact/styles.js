import styled from "styled-components";

export const Container = styled.div`
    max-width: 1024px;
    width: 100%
    align-self: center;
`;

export const Form = styled.form`
    max-width: 400px;
    width: 100%;
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
    
    & label, input, textarea {
        width:100%;
        position: relative;
        display: block;
        margin: auto;
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