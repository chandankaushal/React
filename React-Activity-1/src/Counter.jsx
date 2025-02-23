import { useState } from "react";

export default function Counter() {
  const [state, setState] = useState(10000);
  function btnClick() {
    setState(state + 1);
  }
  return (
    <>
      <h2>Count Value: - {state}</h2>
      <button onClick={btnClick}>Increase Count</button>
    </>
  );
}
