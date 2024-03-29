import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    list-style: none;
    color: ${({theme}) => theme.color.white};

    &.active{
        font-weight: bold;
    }
`;