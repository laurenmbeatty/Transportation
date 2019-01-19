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
  color: #333;
  &.flash {
    animation: ${animationRule};
    .fa-arrow-left {
      color: orange;
    }
  }
  position: relative;
  .fa-arrow-left,
  .fa-times {
    position: absolute;
    left: 1.5vmin;
    top: 1.5vmin;
    font-size: 1.5rem;
    color: ${props =>
      props.inputColor === "go" || props.inputColor === "caution"
        ? "#34CA4A"
        : "red"};
  }
`;

const rotate = keyframes`
  0% {
      transform: rotate(10deg);
  }
  25% {
      transform: rotate(-10deg);
  }
  50% {
      transform: rotate(10deg)
  }
  75% {
    transform: rotate(-10deg)
  }
  100% {
    transform: rotate(0deg)
  }
`;
const rotateRule = css`
  ${rotate} 1s infinite alternate;
`;
export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .fa-walking {
      font-size: 1.5rem;
      margin-top: 10px;
  }
${props =>
  props.inputColor === "go" &&
  css`
    color: #34ca4a;
    animation: ${rotateRule};
  `}
  ${props =>
    props.inputColor === "caution" &&
    css`
      color: orange;
      animation: ${rotateRule};
    `}
  ${props =>
    props.inputColor === "stop" &&
    css`
      color: red;
    `}
`;
