import React from "react";
import { render } from "react-dom";
import TrafficLight from "./components/TrafficLight/TrafficLight";
import * as Styled from "./styles";
class App extends React.Component {
  state = {
    lightState: "green",
    leftState: "caution"
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

  leftTurnMachine = {
    go: {
      LEFT_TIMER: "caution"
    },
    caution: {
      LEFT_TIMER: "stop"
    },
    stop: {
      LEFT_TIMER: "go"
    }
  };

  startService = () => {
    //start cycling through transitions
  };

  transition = (state, action) => {
    if (action === "TIMER") {
      this.setState({
        lightState: this.machine[state][action]
      });
    } else if (action === "LEFT_TIMER") {
      this.setState({
        leftState: this.leftTurnMachine[state][action]
      });
    }
  };

  componentDidMount() {
    setInterval(() => {
      this.transition(this.state.lightState, "TIMER");
      this.transition(this.state.leftState, "LEFT_TIMER");
    }, 2000);
  }

  render() {
    const { lightState, leftState } = this.state;
    return (
      <Styled.Container>
        <TrafficLight color={lightState} leftColor={leftState} id="central" />
        <TrafficLight color={lightState} leftColor={leftState} id="spring" />
      </Styled.Container>
    );
  }
}
render(<App />, document.getElementById("root"));
