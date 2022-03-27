import xceedLogo from "../../../assets/xceed-logo-black.png";
import * as S from "./styles";

export default function Header(): JSX.Element {
  return (
    <S.Container>
      <S.LogoContainer>
        <img src={xceedLogo} alt="xceed-logo" />
      </S.LogoContainer>
      <S.HeaderTitle>Xceed Liga Challenge 2022</S.HeaderTitle>
    </S.Container>
  );
}
