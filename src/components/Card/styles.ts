import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #67a88f;
  margin: 20px;
  font-size: 20px;
  border-radius: 20px;
  padding: 20px;

  cursor: pointer;
`;

export const Image = styled.div<{ url: string }>`
  width: 251px;
  height: 162px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(props) => props.url});
`;

export const Name = styled.p`
  font-style: normal;
  font-weight: bold;

  line-height: 20px;

  text-align: center;

  color: #ffffff;
`;

export const Types = styled.div`
  margin-top: 30px;
`;


export const Type = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 251px;
  height: 30px;

  background: #ffffff;
  border-radius: 15px;

  margin-bottom: 15px;
  font-size: 15px;
  font-weight: 400;
`;
