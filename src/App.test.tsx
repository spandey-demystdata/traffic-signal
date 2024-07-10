import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import {
  trafficCompTest1,
  trafficCompTest2,
} from "./components/TrafficLight.test";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe("App component related", () => {
  test("renders the light component correctly", () => {
    render(<App />);
    expect(screen.getByRole("lights-wrapper")).toBeInTheDocument();
  });

  test("turn off button is disabled and turn on button starts the traffic light", () => {
    render(<App />);
    let turnOffLight = screen.getByRole("turn-off-button");
    let turnOnLight = screen.getByRole("turn-on-button");
    expect(turnOffLight).toBeDisabled();
    act(() => turnOnLight.click());
  });

  trafficCompTest2();

  test("turn on button is disabled after turning on the lights and turn off button stops the traffic light", () => {
    render(<App />);
    let turnOnLight = screen.getByRole("turn-on-button");
    let turnOffLight = screen.getByRole("turn-off-button");
    act(() => turnOnLight.click());
    expect(turnOnLight).toBeDisabled();
    act(() => turnOffLight.click());
  });

  trafficCompTest1();
});
