import React, { useLayoutEffect } from "react";

function App() {
  const num1 = 3;
  const num2 = 2;

  return <div>result: {num1 ** num2}</div>;
}
// = 5
function App() {
  const name = "john";
  const surname = "smit";

  return <div>result: {name + " " + surname}</div>;
}
// john smit
function App() {
  const num = 4;

  return <div>result: {Math.sqrt(num)}</div>;
  // = 2
}
export default App;
