import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { TrafficLight } from "./TrafficLight";
import "@testing-library/jest-dom";
import { allStates } from "../state/states";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

export const trafficCompTest1 = () => {
  test("renders the light component correctly", () => {
    render(<TrafficLight allStates={allStates} initialState={false} />);
    const lights = screen.getAllByRole("zinc-light");
    expect(lights.length).toBe(3);
  });
};

export const trafficCompTest2 = () => {
  test("lights change color as per time", () => {
    render(<TrafficLight allStates={allStates} initialState={true} />);
    let lightRed = screen.getByRole("red-light");
    expect(lightRed).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3000);
    });
    let lightYellow = screen.getByRole("yellow-light");
    expect(lightYellow).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    let lightGreen = screen.getByRole("green-light");
    expect(lightGreen).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(4000);
    });
    let lightRed2 = screen.getByRole("red-light");
    expect(lightRed2).toBeInTheDocument();
  });
};

describe("TrafficLight component related", () => {
  trafficCompTest1();
  trafficCompTest2();
});
