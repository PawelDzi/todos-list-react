import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { List, ListUl } from "./features/author/styled";

export default () => (
    <HashRouter>
        <nav>
            <ListUl>
                <List>
                    <NavLink activeClassName="active" to="/zadania">Zadania</NavLink>
                </List>
                <List>
                    <NavLink activeClassName="active" to="/autor">O autorze</NavLink>
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