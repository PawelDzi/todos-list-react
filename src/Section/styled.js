import styled, { css } from "styled-components";

export const Sections = styled.div`
    margin: 10px 0;
`;

export const SectionsItem = styled.div`
    background-color: white;
    margin: 3px;
    padding: 15px;

    ${({ section }) => section && css`
        border-bottom: 1px solid #ddd;
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 20px;
        justify-content: space-between;
        align-items: center;
        padding: 20px;

        @media (max-width: 767px){
            grid-template-columns: 1fr;
        }
    `}
`;
export const SectionsText = styled.div`
    font-weight: bolder;
    font-size: 24px;
`;