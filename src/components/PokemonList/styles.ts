import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  overflow-y: scroll;

  height: 80vh;

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d53b47;
    border-radius: 5px;
    transform: rotate(90deg);
    width: 177px;
    height: 12px;
  }
`;
