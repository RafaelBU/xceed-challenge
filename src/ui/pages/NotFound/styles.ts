import styled from "styled-components";

export const ErrorContainer = styled.div`
  background: url(${require("../../../assets/404.gif")}) no-repeat center;
  background-position-y: top;
  margin: 0 102px 0 127px;
  height: 468px;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 #e2e4e5;
  background-color: #fff;
  padding-top: 20px;
`;

export const ErrorTitle = styled.h1`
  color: #1f728c;
  text-align: center;
  margin-bottom: 200px;
`;
