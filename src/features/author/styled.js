import styled from "styled-components";

export const ListUl = styled.ul `
    display: flex;
    list-style: none;
    justify-content: center;
    background-color: ${({theme}) => theme.color.teal};
    text-decoration: none;
    margin: 0;
    padding: 0;
`;

export const List = styled.li `
    margin: 20px;
`;