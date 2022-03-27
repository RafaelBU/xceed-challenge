import * as S from "./styles";

export default function Loader(): JSX.Element {
  return (
    <S.LoaderContainer>
      <S.LoadingMessage>Loading</S.LoadingMessage>
      <S.Dot delay="0s" />
      <S.Dot delay="0.1s" />
      <S.Dot delay="0.2s" />
    </S.LoaderContainer>
  );
}
