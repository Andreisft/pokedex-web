import styled from "styled-components";
import Card from "../../components/Card";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  background-color: red;
  height: 100%;
`;

export const BaseStatsBox = styled.div`
  background-color: black;
  width: 50vw;
`;

export const LargeCard = styled(Card)`
  height: 492px;
  width: 50vw;
`;
