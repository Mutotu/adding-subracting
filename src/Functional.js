import "./styles.css";
import ButtonPlus from "./ButtonPlus";
import ButtonMinus from "./ButtonMinus";
import Header from "./Header";
import { useState, useEffect, useRef } from "react";

export default function App() {
  let numberRef = useRef();
  const [number, setNumber] = useState(0);

  const reset = (e) => {
    e.preventDefault();
    setTimeout(() => {
      alert(numberRef.current);
      // console.log(numberRef.current);
    }, 2000);
  };

  useEffect(() => {
    numberRef.current = number;
  }, [number]);

  return (
    <div className="funcComp">
      <h2>Functional Components</h2>
      <Header number={number} />
      <ButtonMinus number={number} setNumber={setNumber} />
      <ButtonPlus number={number} setNumber={setNumber} />
      <button onClick={reset}>Settimeout</button>
    </div>
  );
}
