import { BrowserRouter, Switch, Route } from "react-router-dom";
import TeamList from "./ui/pages/TeamsList";
import Header from "./ui/components/Header";
import TeamPlayers from "./ui/pages/TeamPlayers";
import NotFound from "./ui/pages/NotFound";
import Background from "./ui/components/Background";

function App() {
  return (
    <>
      <Header />
      <Background />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <TeamList />
          </Route>
          <Route path="/team/:teamId">
            <TeamPlayers />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
