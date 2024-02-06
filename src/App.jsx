import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Hello from "./components/Hello";

function App() {
  const [count, setCount] = useState(0);

  const seatNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const person = {
    name: "Rob",
    message: "Hi there!",
    emoji: "👋",
    seatNumbers: seatNumbers,
  };
  return (
    <div className="App">
      <Hello person={person} seatNumbers={seatNumbers} />
    </div>
  );
}

export default App;
