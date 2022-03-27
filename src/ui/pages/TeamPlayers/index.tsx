import { useState, useEffect, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { Player } from "../../../data/types/domainTypes";
import Loader from "../../components/Loader";
import useTeamPlayers from "../../hooks/useTeamPlayers";
import PlayersList from "../components/PlayersList";
import * as S from "./styles";

type Params = {
  teamId: string;
};

export default function TeamPlayers(): JSX.Element {
  const [visibleTeamPlayers, setVisibleTeamPlayers] = useState<Player[]>([]);
  const [searchField, setSearchField] = useState<string>("empty");
  const [showSearchError, setSearchError] = useState<boolean>(false);

  const { teamId } = useParams<Params>();
  const { teamPlayers, isLoading } = useTeamPlayers(teamId);

  useEffect(() => {
    if (!isLoading) {
      setVisibleTeamPlayers(
        teamPlayers?.players.filter((_value, index) => index < 3)
      );
    }
  }, [isLoading, teamPlayers]);

  useEffect(() => {
    if (searchField !== "empty") {
      const filterResult = teamPlayers?.players.filter(({ name }) =>
        name.toLowerCase().includes(searchField)
      );
      if (filterResult.length === 0) {
        setSearchError(true);
      } else {
        setSearchError(false);
      }
      setVisibleTeamPlayers(filterResult);
    }
  }, [searchField, teamPlayers]);

  useEffect(() => {
    if (searchField === "") {
      setVisibleTeamPlayers(
        teamPlayers?.players?.filter((_value, index) => index < 3)
      );
    }
  }, [searchField, teamPlayers, isLoading]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value);
  };

  const handleKeyPress = (e: any) => {
    const { key } = e;
    if (key === "Enter") {
      setSearchField(e.target.value);
    }
  };

  if (isLoading) {
    return (
      <S.PlayersContainer>
        <Loader />
      </S.PlayersContainer>
    );
  }

  return (
    <S.PlayersContainer>
      <S.Content>
        <S.TitleRow>
          <S.SearchContainer>
            <S.SearchIcon />
            <S.Search
              placeholder="Search"
              onBlur={handleSearch}
              onKeyPress={handleKeyPress}
            />
          </S.SearchContainer>

          <S.Title>{teamPlayers.teamName}</S.Title>
        </S.TitleRow>

        {showSearchError ? (
          <S.NoSearchResult>
            There are not results, please try with other name
          </S.NoSearchResult>
        ) : (
          <PlayersList
            teamPlayers={teamPlayers}
            visibleTeamPlayers={visibleTeamPlayers}
            setVisibleTeamPlayers={setVisibleTeamPlayers}
          />
        )}
      </S.Content>
    </S.PlayersContainer>
  );
}
