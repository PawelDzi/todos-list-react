import { List, ListUl } from "./styled";
import { StyledNavLink } from "../styled";

export default () => (
    <ListUl>
        <List>
            <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </List>
        <List>
            <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </List>
    </ListUl>
);