import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 70vh;
  margin: 30px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 20px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const LoginBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;
