import { useState } from "react";

function Counter() {
  // arrays
  const [array, setArray] = useState([]);

  return (
    <>
      <div className="counter">
        <h1>{array.toString()}</h1>
        <button
          onClick={() => {
            setArray((prevArray) => [...prevArray, "+1"]);
          }}
        >
          Increment
        </button>

        <button
          onClick={() => {
            setArray((prevArray) => [...prevArray, "-1"]);
          }}
        >
          Decrement
        </button>

        <button
          onClick={() => {
            setArray([]);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default Counter;

// using callback functions since new state depends on the previous state (:
// see notes on notion: https://www.notion.so/12076341f38c80d4a152ded1b7f40060?v=12076341f38c81d5833a000cdbda2594&p=1dc76341f38c801ebf40c1bd9a745c53&pm=s
