import styled, { keyframes } from "styled-components";

const loadAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const TeamsContainer = styled.div`
  margin: 0 102px 0 127px;
  height: 468px;
  padding: 43px 70px 66px 70px;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 #e2e4e5;
  background-color: #fff;
`;

export const Content = styled.div`
  animation: ${loadAnimation} 1.5s ease-in;
`;

export const Title = styled.h6`
  margin: 0 0 67px 0;
  font-size: 28px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.93;
  letter-spacing: normal;
  color: #3e4b54;
  text-align: center;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.p`
  width: 20%;
  height: 26px;
  margin: 0;
  margin-bottom: 54px;
  font-size: 20px;
  font-weight: 900;
  font-stretch: normal;
  font-style: oblique;
  line-height: 1.3;
  letter-spacing: normal;
  color: #46555e;
  cursor: pointer;
`;
