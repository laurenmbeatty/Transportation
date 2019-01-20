import React from "react";
import { render, cleanup } from "react-testing-library";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faArrowLeft,
  faWalking
} from "@fortawesome/free-solid-svg-icons";
library.add(faTimes, faArrowLeft, faWalking);
import "jest-styled-components";
import TrafficLight from "./TrafficLight";

afterEach(cleanup);

test("it renders with some props", () => {
  const props = {
    color: "red",
    leftColor: "caution"
  };

  const { getByTestId } = render(<TrafficLight {...props} />);

  const trafficLight = getByTestId("traffic-light");

  expect(trafficLight).toBeDefined();
});
