import styled from "styled-components";

type ColumParam = {
  isClickable?: boolean;
};

type OrderParam = {
  customMargin: string;
};

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const OrderSymbol = styled.img<OrderParam>`
  width: 7px;
  height: 8px;
  margin-left: ${(props) => props.customMargin};
`;

export const Column = styled.p<ColumParam>`
  width: 25%;
  cursor: ${(props) => (props.isClickable ? "pointer" : "auto")};
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: 1.4px;
  color: #b6babd;
`;

export const Cell = styled.p`
  width: 25%;
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: #3e4b54;
`;

export const CellBold = styled.p`
  width: 25%;
  font-size: 20px;
  font-weight: 900;
  font-stretch: normal;
  font-style: oblique;
  line-height: 1.3;
  letter-spacing: normal;
  color: #46555e;
`;

export const ContentContainer = styled.div`
  height: 200px;
  overflow: auto;
  margin-bottom: 86px;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 3px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SeeMore = styled.button`
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: 1.4px;
  text-align: center;
  color: #b6babd;
  height: 16px;
  background-color: #fff;
  outline-style: none;
  box-shadow: none;
  border-color: transparent;
  cursor: pointer;
`;
