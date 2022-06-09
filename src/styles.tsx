import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 64px;
  background: #dbd8d8;
  font-size: 2rem;
  padding: 0px 8px;
  line-height: 2em;
  color: white;
  font-weight: 200;
  color: black;
`;

export const CardGroupsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
  @media only screen and (max-width: 400px) {
    flex-direction: column;
  }
`;
