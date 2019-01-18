import React from "react";
import { render } from "react-dom";
import TrafficLight from "./components/TrafficLight/TrafficLight";
import * as Styled from "./styles";
class App extends React.Component {
  state = {
    lightState: "green",
    otherLightState: "red",
    leftState: "caution",
    otherLeftState: "stop"
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

  otherMachine = {
    green: {
      OTHER_TIMER: "yellow"
    },
    yellow: {
      OTHER_TIMER: "red"
    },
    red: {
      OTHER_TIMER: "green"
    }
  };

  leftTurnMachine = {
    go: {
      LEFT_TURN_TIMER: "caution"
    },
    caution: {
      LEFT_TURN_TIMER: "stop"
    },
    stop: {
      LEFT_TURN_TIMER: "go"
    }
  };

  otherLeftTurnMachine = {
    go: {
      OTHER_LEFT_TURN_TIMER: "caution"
    },
    caution: {
      OTHER_LEFT_TURN_TIMER: "stop"
    },
    stop: {
      OTHER_LEFT_TURN_TIMER: "go"
    }
  };

  transition = (state, action) => {
    if (action === "TIMER") {
      this.setState({
        lightState: this.machine[state][action]
      });
    } else if (action === "OTHER_TIMER") {
      this.setState({
        otherLightState: this.otherMachine[state][action]
      });
    } else if (action === "LEFT_TURN_TIMER") {
      this.setState({
        leftState: this.leftTurnMachine[state][action]
      });
    } else if (action === "OTHER_LEFT_TURN_TIMER") {
      this.setState({
        otherLeftState: this.otherLeftTurnMachine[state][action]
      });
    }
  };

  componentDidMount() {
    setInterval(() => {
      this.transition(this.state.lightState, "TIMER");
      this.transition(this.state.otherLightState, "OTHER_TIMER");
      this.transition(this.state.leftState, "LEFT_TURN_TIMER");
      this.transition(this.state.otherLeftState, "OTHER_LEFT_TURN_TIMER");
    }, 4000);
  }

  render() {
    const {
      lightState,
      otherLightState,
      leftState,
      otherLeftState
    } = this.state;
    return (
      <Styled.Container>
        <TrafficLight color={lightState} leftColor={leftState} id="central" />
        <TrafficLight
          color={otherLightState}
          leftColor={otherLeftState}
          id="spring"
        />
      </Styled.Container>
    );
  }
}
render(<App />, document.getElementById("root"));
