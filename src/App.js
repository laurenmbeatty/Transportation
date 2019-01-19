import React from "react";
import { render } from "react-dom";
import TrafficLight from "./components/TrafficLight/TrafficLight";
import * as Styled from "./styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowLeft);
class App extends React.Component {
  state = {
    lightState: "green",
    otherLightState: "red",
    leftState: "caution",
    otherLeftState: "stop",
    phase: "phase0"
  };

  lightMachine = {
    phase0: {
      TIMER: "phase1"
    },
    phase1: {
      TIMER: "phase2"
    },
    phase2: {
      TIMER: "phase3"
    },
    phase3: {
      TIMER: "phase4"
    },
    phase4: {
      TIMER: "phase5"
    },
    phase5: {
      TIMER: "phase0"
    }
  };
  transition = (state, action) => {
    this.setState(
      {
        phase: this.lightMachine[state][action]
      },
      () => {
        switch (this.state.phase) {
          case "phase0":
            this.setState({
              lightState: "red",
              otherLightState: "red",
              leftState: "go",
              otherLeftState: "stop"
            });
            break;
          case "phase1":
            this.setState({
              lightState: "green",
              otherLightState: "red",
              leftState: "caution",
              otherLeftState: "stop"
            });
            break;
          case "phase2":
            this.setState({
              lightState: "yellow",
              otherLightState: "red",
              leftState: "caution",
              otherLeftState: "stop"
            });
            break;
          case "phase3":
            this.setState({
              lightState: "red",
              otherLightState: "red",
              leftState: "stop",
              otherLeftState: "go"
            });
            break;

          case "phase4":
            this.setState({
              lightState: "red",
              otherLightState: "green",
              leftState: "stop",
              otherLeftState: "caution"
            });
            break;
          case "phase5":
            this.setState({
              lightState: "red",
              otherLightState: "yellow",
              leftState: "stop",
              otherLeftState: "caution"
            });
            break;
          default:
          // code block
        }
      }
    );
  };

  componentDidMount() {
    setInterval(() => {
      this.transition(this.state.phase, "TIMER");
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
