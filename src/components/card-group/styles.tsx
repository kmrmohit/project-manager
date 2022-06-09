import styled from "styled-components";

export const Container = styled.div`
  background: #d2d4d5;
  width: 32%;
  padding: 16px;
  height: fit-content;
  border-radius: 8px;
`;

export const Title = styled.h3`
  margin: 0px;
  max-width: 40%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Body = styled.section`
  width: 94%;
  & > div + div {
    margin-top: 8px;
  }
  margin-top: 48px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
