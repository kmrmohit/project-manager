import React from "react";
import InputCard from "../create-card";
import Card, { ComponentProps as CardProps } from "../card";
import { useStore } from "../../store";
import { Body, Title, Container, Header } from "./styles";

export type action = "create" | "edit" | "delete";
export interface ComponentProps {
  id: number;
  title?: string;
  cards: Array<CardProps>;
  onAction?: (actionType: action) => void;
}

const CardGroup: React.FC<ComponentProps> = ({
  id,
  title,
  cards = [],
}: ComponentProps) => {
  const { addCard, addGroup, removeGroup, removeCard } = useStore();

  return (
    <Container>
      {!title ? (
        <InputCard
          type="card-group"
          onAddCard={(_, { title }) => {
            addGroup({ title });
          }}
        />
      ) : (
        <React.Fragment>
          <Header>
            <Title>{title}</Title>
            <span
              style={{ cursor: "pointer", userSelect: "none" }}
              onClick={() => removeGroup(id)}
            >
              &#x2715;
            </span>
          </Header>
          <Body>
            {cards.map((obj, cardId) => (
              <Card
                key={id * cardId + cardId}
                {...obj}
                onAction={(type) => removeCard(id, cardId)}
              />
            ))}
            <InputCard
              type="card-item"
              onAddCard={(_, { title, description }) => {
                addCard(id, { title, content: description });
              }}
            />
          </Body>
        </React.Fragment>
      )}
    </Container>
  );
};

export default CardGroup;
