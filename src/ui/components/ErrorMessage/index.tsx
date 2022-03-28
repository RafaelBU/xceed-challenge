import * as S from "./styles";

export default function ErrorMessage({
  title,
}: {
  title: string;
}): JSX.Element {
  return <S.Message>{title}</S.Message>;
}
