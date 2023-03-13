import styled, { css } from "styled-components";

export const StyledSections = styled.div`
    margin: 10px 0;
`;

export const SectionsItem = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    margin: 3px;
    padding: 15px;

    ${({ section }) => section && css`
        border-bottom: 1px solid ${({ theme }) => theme.color.alto};
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 20px;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        font-weight: bolder;
        font-size: 24px;

        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
            grid-template-columns: 1fr;
        }
    `}

`;
export const SectionsText = styled.div`
    
`;

export const SectionsSmallBox = styled.span`
    display: flex;
    flex-grow: 5;
`;