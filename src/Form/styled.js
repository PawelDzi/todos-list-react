import styled from "styled-components";

export const Blank = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
        grid-template-columns: 1fr;
        }
`;

export const BlankInput = styled.input`
    border: 1px solid ${({theme}) => theme.color.silver};
    padding: 10px;
    width: 100%;
`;

export const BankButton = styled.button`
    background-color: ${({theme}) => theme.color.teal};
    color: ${({theme}) => theme.color.white};
    border: none;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        background-color: ${({theme}) => theme.color.pineGreen};
        transition: scale(1.1);
    }
`;