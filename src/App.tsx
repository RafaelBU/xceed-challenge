import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TeamList from "./ui/pages/TeamsList";
import Header from "./ui/components/Header";
import * as S from "./styles";
import TeamPlayers from "./ui/pages/TeamPlayers";

function App() {
  return (
    <>
      <Header />
      <S.BackgroundContainer>
        <S.LigaImage />
        <S.GreyBlock />
      </S.BackgroundContainer>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <TeamList />
          </Route>
          <Route path="/team/:teamId">
            <TeamPlayers />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
