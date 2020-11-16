import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 163px;
  height: 137.06px;
  margin: 20px;

  background: #67a88f;
  border-radius: 20px;

  cursor: pointer;
`;

export const Image = styled.div<{ url: string }>`
  width: 93px;
  height: 93px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(props) => props.url});
`;

export const Name = styled.p`
  width: 68px;
  height: 20px;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;

  text-align: center;

  color: #ffffff;
`;
