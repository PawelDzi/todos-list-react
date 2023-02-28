import styled, { css } from "styled-components";

export const Blank = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px){
        grid-template-columns: 1fr;
        }
`;

export const BlankInput = styled.input`
    border: 1px solid #cacaca;
    padding: 10px;
    width: 100%;
`;

export const BankButton = styled.button`
    background-color: #008080;
    color: white;
    border: none;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        background-color: #007070;
        transition: scale(1.1);
    }
`;