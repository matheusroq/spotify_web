import styled from 'styled-components';

export const Container = styled.div`
  color: #000;
  padding: 20px;

  width: 60vw;
  height: 80px;

  input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px;
    &:focus {
      outline: none;
    }
  }
`;
