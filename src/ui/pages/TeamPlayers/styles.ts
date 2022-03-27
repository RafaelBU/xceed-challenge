import styled, { keyframes } from "styled-components";
import { ReactComponent as SearchSVG } from "../../../assets/lens.svg";

const loadAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const PlayersContainer = styled.div`
  margin: 0 102px 0 127px;
  height: 438px;
  padding: 49px 0 49px 43px;
  margin: 0 29px 67px 86px;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 #e2e4e5;
  background-color: #fff;
`;

export const Content = styled.div`
  animation: ${loadAnimation} 1.5s ease-in;
`;

export const TitleRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 246px;
  height: 53px;
  border-radius: 30px;
  background-color: #f7f7f7;
  border: 1px;
  padding: 20px;
  box-sizing: border-box;
`;

export const SearchIcon = styled(SearchSVG)`
  margin-right: 13px;
`;

export const Search = styled.input`
  background-color: #f7f7f7;
  border: 1px;

  &:focus {
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
  }
`;

export const Title = styled.h6`
  margin: 0 0 67px 0;
  font-size: 20px;
  font-weight: 900;
  font-stretch: normal;
  font-style: oblique;
  line-height: 1.3;
  letter-spacing: normal;
  color: #46555e;
  text-align: center;
`;

export const NoSearchResult = styled.h3`
  color: #1f728c;
  text-align: center;
`;
