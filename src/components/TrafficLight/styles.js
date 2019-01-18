import styled, { css, keyframes } from "styled-components";

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
const flash = keyframes`
  0% {
      opacity; 0.2;
  }
  50% {
      opacity: 1;
  }
  100% {
      opacity: 0.2;
  }
`;
const animationRule = css`
  ${flash} 1s infinite alternate;
`;
export const LeftLight = styled(Light)`
  background-color: ${props =>
    props.inputColor === "go" || props.inputColor === "caution"
      ? "orange"
      : "#333"};
  &.flash {
    animation: ${animationRule};
  }
`;
