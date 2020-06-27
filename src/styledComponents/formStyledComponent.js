import styled from "styled-components";

export const FormHeader = styled.div`
    font-size: x-large;
    font-weight: bold;
    padding: 12px 20px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const FormOptions = styled.div`
    font-size: small;
    padding: 0px;
    width: 80%;
    margin: auto;
    margin-top: 8px;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
`;

export const Input = styled.input`
    width: 80%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

export const Submit = styled.input`
    width : 25%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

export const Form = styled.form`
    margin: auto;
    width: 50%;
`;