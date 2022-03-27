import { useState, Dispatch, SetStateAction } from "react";
import { Player, TeamPlayersData } from "../../../../data/types/domainTypes";
import * as S from "./styles";

export default function PlayersList({
  teamPlayers,
  visibleTeamPlayers,
  setVisibleTeamPlayers,
}: {
  teamPlayers: TeamPlayersData;
  visibleTeamPlayers: Player[];
  setVisibleTeamPlayers: Dispatch<SetStateAction<Player[]>>;
}) {
  const [isAscending, setIsAscending] = useState<boolean>(true);

  const updateVisiblePlayers = () => {
    const aux = [...visibleTeamPlayers];
    const currentPlayers = aux.length * 2;
    const newPlayers = teamPlayers?.players.filter(
      (_value, index) => index < currentPlayers
    );
    setVisibleTeamPlayers(newPlayers);
  };

  const orderPlayers = () => {
    const aux = [...visibleTeamPlayers];
    const isAsc = !isAscending;
    aux.sort((a, b) =>
      isAsc ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
    );
    setVisibleTeamPlayers(aux);
    setIsAscending((prev) => !prev);
  };

  const showSeeMoreButtton =
    visibleTeamPlayers.length < teamPlayers?.players?.length;

  return (
    <>
      <S.Row>
        <S.Column isClickable={true} onClick={orderPlayers}>
          NAME
          <S.OrderSymbol
            src={require("../../../../assets/increasing-symbol.png")}
            customMargin="5px"
          />
          <S.OrderSymbol
            src={require("../../../../assets/decreasing-symbol.png")}
            customMargin="7px"
          />
        </S.Column>
        <S.Column>NACIONALITY</S.Column>
        <S.Column>POSITION</S.Column>
        <S.Column>AGE</S.Column>
      </S.Row>
      <S.ContentContainer>
        {visibleTeamPlayers.map(({ name, nationality, position, age }) => (
          <S.Row key={name}>
            <S.CellBold>{name}</S.CellBold>
            <S.Cell>{nationality}</S.Cell>
            <S.Cell>{position}</S.Cell>
            <S.Cell>{age}</S.Cell>
          </S.Row>
        ))}
      </S.ContentContainer>

      {showSeeMoreButtton && (
        <S.ButtonContainer>
          <S.SeeMore onClick={updateVisiblePlayers}>SEE MORE</S.SeeMore>
        </S.ButtonContainer>
      )}
    </>
  );
}
