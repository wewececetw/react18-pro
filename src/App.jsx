import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";

function App() {
  const [count, setCount] = useState(0);

  const seatNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const person = {
    name: "Rob",
    message: "Hi there!",
    emoji: "👋",
    seatNumbers: seatNumbers,
  };
  const fruits = ["🍏", "🍊", "🍌", "🍉", "🍍"];
  return (
    <div className="App">
      <Hello person={person} seatNumbers={seatNumbers} />
      <Fruits fruits={fruits} />
    </div>
  );
}

export default App;
