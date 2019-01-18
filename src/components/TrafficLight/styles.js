import styled from "styled-components";

export const TrafficLight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #333;
  height: 30vh;
  width: 10vw;
  padding: 15px;
`;
export const Light = styled.div`
  opacity: ${props => props.opacity};
  width: 6vmin;
  height: 6vmin;
  border-radius: 50%;
  transition: opacity 0.3s;
  background-color: ${props => props.inputColor};
`;

export const LeftLight = styled(Light)``;
