import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { List, ListUl } from "./features/author/styled";
import { StyledNavLink } from "./styled";

export default () => (
    <HashRouter>
        <nav>
            <ListUl>
                <List>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </List>
                <List>
                    <StyledNavLink to="/autor">O autorze</StyledNavLink>
                </List>
            </ListUl>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/autor">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="zadania" />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);