import React from "react";
import { render } from "react-dom";
import TrafficLight from "./components/TrafficLight/TrafficLight";
import * as Styled from "./styles";
class App extends React.Component {
  state = {
    lightState: "green"
  };
  machine = {
    green: {
      TIMER: "yellow"
    },
    yellow: {
      TIMER: "red"
    },
    red: {
      TIMER: "green"
    }
  };
  transition = (state, action) => {
    this.setState({
      lightState: this.machine[state][action]
    });
  };

  componentDidMount() {
    setInterval(() => {
      this.transition(this.state.lightState, "TIMER");
    }, 2000);
  }

  render() {
    const { lightState } = this.state;
    return (
      <Styled.Container>
        <TrafficLight color={lightState} id="central" />
        <TrafficLight color={lightState} id="spring" />
      </Styled.Container>
    );
  }
}
render(<App />, document.getElementById("root"));
