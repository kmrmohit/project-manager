import React from "react";
import { Body, Container, Header, Title } from "./styles";

export type action = "create" | "edit" | "delete";
export interface ComponentProps {
  title?: string;
  content?: string;
  onAction?: (actionType: action) => void;
  className?: string;
}

const Card: React.FC<ComponentProps> = ({
  title = "Unknown",
  content = "",
  className = "",
  ...props
}: ComponentProps) => {
  return (
    <Container className={className}>
      <Header>
        <Title>{title}</Title>
        <span
          style={{ cursor: "pointer", userSelect: "none" }}
          onClick={() =>
            typeof props.onAction === "function"
              ? props.onAction("delete")
              : undefined
          }
        >
          &#x2715;
        </span>
      </Header>
      <Body>{content}</Body>
    </Container>
  );
};

export default Card;
