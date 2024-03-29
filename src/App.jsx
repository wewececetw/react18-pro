import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  const seatNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const person = {
    name: "Rob",
    message: "Hi there!",
    emoji: "👋",
    seatNumbers: seatNumbers,
  };
  const fruits = [
    {
      name: "apple",
      price: 1.2,
      emoji: "🍏",
      soldOut: true,
    },
    {
      name: "orange",
      price: 0.95,
      emoji: "🍊",
      soldOut: true,
    },
    {
      name: "banana",
      price: 0.75,
      emoji: "🍌",
      soldOut: true,
    },
    {
      name: "watermelon",
      price: 4.5,
      emoji: "🍉",
      soldOut: false,
    },
    {
      name: "pineapple",
      price: 3.5,
      emoji: "🍍",
      soldOut: false,
    },
  ];

  return (
    <div className="App">
      <Hello person={person} seatNumbers={seatNumbers} />
      <Fruits fruits={fruits} />
      <ConditionalComponent />
      <Message />
      <Counter />
      <Form />
    </div>
  );
}

export default App;
