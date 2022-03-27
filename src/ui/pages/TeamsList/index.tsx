import useTeamList from "../../hooks/useTeamList";
import { useHistory } from "react-router-dom";
import * as S from "./styles";
import Loader from "../../components/Loader";

export default function TeamList(): JSX.Element {
  const { teamList, isLoading } = useTeamList();
  const history = useHistory();

  return (
    <S.TeamsContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <S.Content>
          <S.Title>Select a team to see its roster</S.Title>
          <S.ListContainer>
            {teamList.map(({ name, id }) => (
              <S.Item key={id} onClick={() => history.push(`team/${id}`)}>
                {name}
              </S.Item>
            ))}
          </S.ListContainer>
        </S.Content>
      )}
    </S.TeamsContainer>
  );
}
