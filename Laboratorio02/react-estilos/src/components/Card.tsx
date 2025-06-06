import type { ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
  color: string;
  children?: ReactNode;
  flexDirection?: "row" | "column";
}

const StyledWrapper = styled.div<{
  color: string;
  flexDirection?: "row" | "column";
}>`
  background-color: ${(props) => props.color};
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: center;
  align-items: center;
`;

export default function Card(props: CardProps) {
  return (
    <StyledWrapper color={props.color} flexDirection={props.flexDirection}>
      {props.children}
    </StyledWrapper>
  );
}
