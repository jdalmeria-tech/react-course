import { useState } from "react";

function Counter() {
  const [user, setUser] = useState({ name: "JD", age: 25 });

  return (
    <>
      <div className="counter">
        <h1>
          Counter: {user.age} {user.name}
        </h1>
        <button
          onClick={() => {
          // 1. use a callback function within setState to access the previous value
          // 2. spread all the properties of the previous object into the new obj "...prevUser,"
          // 3. change the property that you want or need to change
            setUser((prevUser) => ({
              ...prevUser,
              age: prevUser.age + 1,
            }));
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setUser((prevUser) => ({
              ...prevUser,
              age: prevUser.age - 1,
            }));
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            setUser((prevUser) => ({ ...prevUser, age: 25 }));
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
