import { useState } from "react";
import Chai from "./Chai.jsx";

function App() {
  const username = "Chai Aur Code";
  return (
    <>
      <Chai />
      <h1>Chai Aur React {username}</h1>
      <p>Test Para</p>
    </>
  );
}

export default App;
