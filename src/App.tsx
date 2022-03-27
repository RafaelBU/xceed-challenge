import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TeamList from "./ui/pages/TeamsList";
import Header from "./ui/components/Header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <TeamList />
          </Route>
          <Route path="/team/:teamId">
            <div>pagina de detalle</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
