import React, { memo } from "react";
import { Container, Filler, Label, Title, Bar } from "./style";
import { generatePercentage } from "../../helpers/generatePercentage";

interface IProps {
  title: string;
  total: number;
  completed: number;
}

function Progress({ title, completed, total }: IProps) {
  return (
    <Container>
      <Title>{title.toUpperCase()}</Title>
      <Bar>
        <Filler width={generatePercentage(completed, total)}>
          <Label>{`${completed}/${total}`}</Label>
        </Filler>
      </Bar>
    </Container>
  );
}

export default memo(Progress);
