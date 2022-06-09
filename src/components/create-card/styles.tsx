import styled from "styled-components";

export const InputContainer = styled.div`
  padding: 16px;
  border-radius: 8px;
  //box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px 0px;
  background: white;
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
    border-radius: 4px;
    max-width: 72px;
    background: black;
    color: white;
    border: none;
    min-height: 32px;
    margin-top: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        opacity: 0.7;
    }
`;
