import { useState } from "react";

function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

  let [arr, setArr] = useState([]);

  function updateArr(newValue) {
    setArr((prevValue) => {
      return [...prevValue, newValue];
    });
  }

  function updateBlue() {
    updateArr("blue moves");
    setMoves((prevValue) => {
      return { ...prevValue, blue: prevValue.blue + 1 };
    });
  }
  function updateRed() {
    updateArr("Red Moves");
    setMoves((prevValue) => {
      return { ...prevValue, red: prevValue.red + 1 };
    });
  }

  function updateGreen() {
    updateArr("Green Moves");
    setMoves((prevValue) => {
      return { ...prevValue, green: prevValue.green + 1 };
    });
  }

  function updateYellow() {
    updateArr("Yellow Moves");
    setMoves((prevValue) => {
      return { ...prevValue, yellow: prevValue.yellow + 1 };
    });
  }

  return (
    <>
      <div className="box">
        <p>{arr[arr.length - 1]}</p>
        <p>Blue {moves.blue}</p>
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={updateBlue}
        >
          +1
        </button>
        <p>Yellow {moves.yellow}</p>
        <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>
          +1
        </button>
        <p>Red {moves.red}</p>
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={updateRed}
        >
          +1
        </button>
        <p>Green {moves.green}</p>
        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={updateGreen}
        >
          +1
        </button>
      </div>
    </>
  );
}

export default LudoBoard;
