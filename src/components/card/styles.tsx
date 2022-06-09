import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  border-radius: 8px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px 0px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 32px;
  h4 {
    margin: 0px;
  }
`;

export const Title = styled.h4`
  max-width: 40%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Body = styled.p`
  margin-top: 16px;
  word-break: break-word;
`;
