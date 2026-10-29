import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    // Reason why counter is not updating as expected is because React batches state updates for performance reasons. When you call setCounter multiple times in a row, it doesn't immediately update the state. Instead, it schedules the updates and only applies the last one. Therefore, calling setCounter(counter + 1) multiple times will only result in a single increment.
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // Reason why counter is updating as expected is because we are using the functional form of setCounter, which takes a function as an argument. This function receives the previous state value (prevCounter) and returns the new state value. By using this approach, each call to setCounter will correctly update the state based on the previous value, resulting in the expected behavior.
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <p>Counter value: {counter}</p>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>

      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
