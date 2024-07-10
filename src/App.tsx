import { useState } from "react";
import { TrafficLight } from "./components/TrafficLight";
import { allStates } from "./state/states";

function App() {
  const [isDisabled, setIsDisabled] = useState(false); //false means lights off, button to turn off light disabled and vice versa for true
  return (
    <>
      <div
        role="lights-wrapper"
        className="flex-col bg-black items-center justify-center w-24 h-auto p-4 mx-auto mt-52 rounded-md"
      >
        <TrafficLight
          allStates={allStates}
          initialState={isDisabled ? true : false}
        />
      </div>
      <div className="flex items-center justify-center w-80 h-auto p-4 mx-auto">
        <button
          role="turn-off-button"
          className={`px-4 ${
            isDisabled ? "bg-sky-700" : "bg-slate-400"
          } mx-4 rounded-md`}
          onClick={() => {
            setIsDisabled(false);
          }}
          disabled={!isDisabled}
        >
          Turn off lights
        </button>
        <button
          role="turn-on-button"
          className={`px-4 ${
            isDisabled ? "bg-slate-400" : "bg-sky-700"
          } mx-4 rounded-md`}
          onClick={() => {
            setIsDisabled(true);
          }}
          disabled={isDisabled}
        >
          Turn on lights
        </button>
      </div>
    </>
  );
}

export default App;
