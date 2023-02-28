import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;  
`;

export const Item = styled.li`
    border-bottom: 1px solid #cacaca;
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
    color: white;
    padding: 5px;
    margin: 5px;
    height: 32px;
    width: 32px;

    ${({ toggleDone }) => toggleDone && css`
    background-color: #008000;

        &:hover{
            background-color: #006000;
        }
    `}

    ${({ toggleRemove }) => toggleRemove && css`
    background-color: #cc0202de;

        &:hover{
            background-color: #aa0000aa;
        }
    `}
`;