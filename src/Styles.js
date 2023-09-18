import styled from 'styled-components';

export const GameContainer = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
  background-color: #333;
`;

export const FrogStyled = styled.div`
  width: 30px;
  height: 30px;
  background-color: green;
  position: absolute;
  left: ${(props) => props.position.x * 30}px;
  bottom: ${(props) => props.position.y * 30}px;
`;

export const CarStyled = styled.div`
  width: 60px;
  height: 30px;
  background-color: red;
  position: absolute;
  left: ${(props) => props.position.x * 30}px;
  top: ${(props) => props.position.y * 30}px;
`;
