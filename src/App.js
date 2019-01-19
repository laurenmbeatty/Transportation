import React from "react";
import { render } from "react-dom";
import TrafficLight from "./components/TrafficLight/TrafficLight";
import * as Styled from "./styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faTimes } from "@fortawesome/free-solid-svg-icons";
const phase0 = require("../public/Phase0.png");
const phase1 = require("../public/Phase1.png");
const phase2 = require("../public/Phase2.png");
const phase3 = require("../public/Phase3.png");
const phase4 = require("../public/Phase4.png");
const phase5 = require("../public/Phase5.png");

library.add(faArrowLeft, faTimes);
class App extends React.Component {
  state = {
    northLightState: "red",
    eastLightState: "red",
    northLeftState: "go",
    eastLeftState: "stop",
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
    switch (state) {
      case "phase0":
        this.setState({
          northLightState: "red",
          eastLightState: "red",
          northLeftState: "go",
          eastLeftState: "stop",
          photoState: phase0
        });
        break;
      case "phase1":
        this.setState({
          northLightState: "green",
          eastLightState: "red",
          northLeftState: "caution",
          eastLeftState: "stop",
          photoState: phase1
        });
        break;
      case "phase2":
        this.setState({
          northLightState: "yellow",
          eastLightState: "red",
          northLeftState: "caution",
          eastLeftState: "stop",
          photoState: phase2
        });
        break;
      case "phase3":
        this.setState({
          northLightState: "red",
          eastLightState: "red",
          northLeftState: "stop",
          eastLeftState: "go",
          photoState: phase3
        });
        break;

      case "phase4":
        this.setState({
          northLightState: "red",
          eastLightState: "green",
          northLeftState: "stop",
          eastLeftState: "caution",
          photoState: phase4
        });
        break;
      case "phase5":
        this.setState({
          northLightState: "red",
          eastLightState: "yellow",
          northLeftState: "stop",
          eastLeftState: "caution",
          photoState: phase5
        });
        break;
      default:
        this.setState({
          northLightState: "red",
          eastLightState: "red",
          northLeftState: "go",
          eastLeftState: "stop",
          photoState: phase0
        });
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
      northLightState,
      eastLightState,
      northLeftState,
      eastLeftState,
      photoState
    } = this.state;
    return (
      <Styled.Container>
        <Styled.Section>
          <h1>North/South Intersection</h1>
          <TrafficLight
            color={northLightState}
            leftColor={northLeftState}
            id="central"
          />
        </Styled.Section>
        <img src={photoState} alt={`traffic flow pattern ${photoState}`} />
        <Styled.Section>
          <h1>East/West Intersection</h1>
          <TrafficLight
            color={eastLightState}
            leftColor={eastLeftState}
            id="spring"
          />
        </Styled.Section>
      </Styled.Container>
    );
  }
}
render(<App />, document.getElementById("root"));
