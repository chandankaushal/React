import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import CardHolder from "./CardHolder";
import Counter from "./Counter";
import LikeButton from "./LikeButton";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";
import LotteryGame from "./LotteryGame";
import TicketNum from "./TicketNum";
import Ticket from "./Ticket";
import Lottery from "./Lottery";
import Forms from "./Forms";
import { sumArr } from "./helper";
import Jokes from "./Jokes";

function App() {
  return (
    <>
      <Lottery
        n={3}
        winningCond={(ticket) => {
          return !!sumArr(ticket) % 2;
        }}
      ></Lottery>
    </>
  );
}

export default App;
