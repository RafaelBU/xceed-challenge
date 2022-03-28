import useTeamList from "../../hooks/useTeamList";
import { useHistory } from "react-router-dom";
import Loader from "../../components/Loader";
import * as S from "./styles";
import ErrorMessage from "../../components/ErrorMessage";

export default function TeamList(): JSX.Element {
  const { teamList, isLoading, hasError } = useTeamList();
  const history = useHistory();

  if (isLoading) {
    return (
      <S.TeamsContainer>
        <Loader />
      </S.TeamsContainer>
    );
  }

  return (
    <S.TeamsContainer>
      <S.Content>
        {hasError ? (
          <ErrorMessage title="An error has ocurred, please try again" />
        ) : (
          <>
            <S.Title>Select a team to see its roster</S.Title>
            <S.ListContainer>
              {teamList.map(({ name, id }) => (
                <S.Item key={id} onClick={() => history.push(`team/${id}`)}>
                  {name}
                </S.Item>
              ))}
            </S.ListContainer>
          </>
        )}
      </S.Content>
    </S.TeamsContainer>
  );
}
