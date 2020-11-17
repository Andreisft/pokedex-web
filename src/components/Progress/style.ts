import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Bar = styled.div`
  width: 400px;
  height: 22px;

  background: #ffffff;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 250px;
  }
`;

export const Title = styled.p`
  color: #ffffff;
  font-weight: 600;
  margin-right: 20px;
  width: 150px;
`;

export const Filler = styled.div<{ width: number }>`
  height: 100%;
  border-radius: 5px;
  width: ${(props) => props.width}%;
  background-color: red;
  text-align: right;
`;

export const Label = styled.span`
  padding-right: 15px;
  color: #ffffff;
`;
