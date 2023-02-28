import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;  
`;

export const Item = styled.li`
    border-bottom: 1px solid ${({theme}) => theme.color.silver};
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 20fr 1fr;
    align-items: center;

    ${({ hidden }) => hidden && css`
     display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    color: ${({theme}) => theme.color.white};
    padding: 5px;
    margin: 5px;
    height: 32px;
    width: 32px;

    ${({ toggleDone }) => toggleDone && css`
    background-color: ${({theme}) => theme.color.japaneseLaurel};

        &:hover{
            background-color: ${({theme}) => theme.color.camarone};
        }
    `}

    ${({ toggleRemove }) => toggleRemove && css`
    background-color: ${({theme}) => theme.color.guardsmanRed};

        &:hover{
            background-color: ${({theme}) => theme.color.brightRed};
        }
    `}
`;