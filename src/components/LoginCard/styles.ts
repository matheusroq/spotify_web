import styled from 'styled-components';
import img from '../../assets/bg.jpg';

export const Container = styled.div`
  margin: 10px;
  height: 80vh;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  background: url(${img}) no-repeat center;
  filter: brightness(1);
  background-size: 500px;
`;
