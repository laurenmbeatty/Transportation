import React from "react";
import * as Styled from "./styles";
class TrafficLight extends React.Component {
  render() {
    const { color, leftColor } = this.props;
    return (
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
        <Styled.LeftLight inputColor={leftColor} />
      </Styled.TrafficLight>
    );
  }
}
export default TrafficLight;
