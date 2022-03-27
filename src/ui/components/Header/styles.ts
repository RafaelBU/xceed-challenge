import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 37px 114px;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.h2`
  font-size: 28px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.93;
  letter-spacing: normal;
  color: #3e4b54;
`;

export const LogoContainer = styled.div`
  width: 177px;
  height: 44px;
  position: absolute;
  left: 6%;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 120px);
`;
