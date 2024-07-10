import React, { useEffect, useState } from "react";
import { Props } from "../state/states";

export const TrafficLight: React.FC<Props> = ({ allStates, initialState }) => {
  const [currState, setCurrState] = useState(0);

  useEffect(() => {
    if (initialState) {
      setTimeout(() => {
        if (currState === allStates.length - 1) {
          setCurrState(0);
        } else {
          setCurrState(currState + 1);
        }
        console.log("hello");
      }, allStates[currState].time);
    }
  }, [currState, initialState]);
  return (
    <>
      {initialState
        ? allStates.map(({ color }) => {
            if (color === allStates[currState].color) {
              return (
                <div
                  role={`${color}-light`}
                  className={`flex rounded-full bg-${color}-700 size-16 my-4`}
                ></div>
              );
            }
            return (
              <div
                role="zinc-light"
                className="flex rounded-full bg-zinc-700 size-16 my-4"
              ></div>
            );
          })
        : [1, 2, 3].map(() => {
            return (
              <div
                role="zinc-light"
                className="flex rounded-full bg-zinc-700 size-16 my-4"
              ></div>
            );
          })}
    </>
  );
};
