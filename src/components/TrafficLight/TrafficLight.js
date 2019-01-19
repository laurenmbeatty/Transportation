import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Styled from "./styles";

class TrafficLight extends React.Component {
  render() {
    const { color, leftColor } = this.props;
    return (
      <div>
        <Styled.TrafficLight>
          <Styled.Light opacity={color === "red" ? 1 : 0.3} inputColor="red" />
          <Styled.Light
            opacity={color === "yellow" ? 1 : 0.3}
            inputColor="yellow"
          />
          <Styled.Light
            opacity={color === "green" ? 1 : 0.3}
            inputColor="#34CA4A"
          />
          <Styled.LeftLight
            className={leftColor === "caution" ? "flash" : ""}
            inputColor={leftColor}
          >
            {leftColor === "stop" ? (
              <FontAwesomeIcon icon="times" />
            ) : (
              <FontAwesomeIcon icon="arrow-left" />
            )}
          </Styled.LeftLight>
        </Styled.TrafficLight>
        <Styled.Icon inputColor={leftColor}>
          <FontAwesomeIcon icon="walking" />
        </Styled.Icon>
      </div>
    );
  }
}
export default TrafficLight;
