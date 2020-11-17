import styled from "styled-components";
import Card from "../../components/Card";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 3% 4%;

  @media (max-width: 1080px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const BaseStatsBox = styled.div`
  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const BaseStatsTitle = styled.h2`
  font-size: 30px;
  color: white;
  text-align: center;
`;

export const ProgressBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LargeCard = styled(Card)`
  margin: 0;

  @media (min-width: 768px) {
    width: 432px;
    height: 492px;
  }
`;
