import styled from "styled-components";

export const Button = styled.button`
    background: transparent;
    color: ${({theme}) => theme.color.teal};
    border: none;
    margin: 0 0 0 50px;
    transition: color 0.3s;
    float: right;
    font-size: 16px;

    &:hover {
        color: ${({theme}) => theme.color.bondiBlue};
    }

    &:disabled {
        color: ${({theme}) => theme.color.silver};
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
        flex-basis: 100%;
        margin: 10px;
    }
`;

export const Load = styled.span `
    color: ${({theme}) => theme.color.silver};
`;