import React from "react";
import { render } from "react-dom";
import TrafficLight from "./components/TrafficLight/TrafficLight";
import * as Styled from "./styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const phase0 = require("../public/Phase0.png");
const phase1 = require("../public/Phase1.png");
const phase2 = require("../public/Phase2.png");
const phase3 = require("../public/Phase3.png");
const phase4 = require("../public/Phase4.png");
const phase5 = require("../public/Phase5.png");

library.add(faArrowLeft);
class App extends React.Component {
  state = {
    lightState: "green",
    otherLightState: "red",
    leftState: "caution",
    otherLeftState: "stop",
    phase: "phase0",
    photoState: phase0
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
  switchState = state => {
    switch (this.state.phase) {
      case "phase0":
        this.setState({
          lightState: "red",
          otherLightState: "red",
          leftState: "go",
          otherLeftState: "stop",
          photoState: phase0
        });
        break;
      case "phase1":
        this.setState({
          lightState: "green",
          otherLightState: "red",
          leftState: "caution",
          otherLeftState: "stop",
          photoState: phase1
        });
        break;
      case "phase2":
        this.setState({
          lightState: "yellow",
          otherLightState: "red",
          leftState: "caution",
          otherLeftState: "stop",
          photoState: phase2
        });
        break;
      case "phase3":
        this.setState({
          lightState: "red",
          otherLightState: "red",
          leftState: "stop",
          otherLeftState: "go",
          photoState: phase3
        });
        break;

      case "phase4":
        this.setState({
          lightState: "red",
          otherLightState: "green",
          leftState: "stop",
          otherLeftState: "caution",
          photoState: phase4
        });
        break;
      case "phase5":
        this.setState({
          lightState: "red",
          otherLightState: "yellow",
          leftState: "stop",
          otherLeftState: "caution",
          photoState: phase5
        });
        break;
      default:
    }
  };
  transition = (state, action) => {
    this.setState(
      {
        phase: this.lightMachine[state][action]
      },
      () => {
        this.switchState(this.state.phase);
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
      otherLeftState,
      photoState
    } = this.state;
    return (
      <Styled.Container>
        <Styled.Section>
          <h1>North/South Intersection</h1>
          <TrafficLight color={lightState} leftColor={leftState} id="central" />
        </Styled.Section>
        <img src={photoState} alt={`traffic flow pattern ${photoState}`} />
        <Styled.Section>
          <h1>East/West Intersection</h1>
          <TrafficLight
            color={otherLightState}
            leftColor={otherLeftState}
            id="spring"
          />
        </Styled.Section>
      </Styled.Container>
    );
  }
}
render(<App />, document.getElementById("root"));
