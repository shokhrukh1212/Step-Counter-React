import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <br />
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, stateCount] = useState(0);
  const [step, stateStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="container">
      <div>
        <button
          onClick={() =>
            stateStep((s) => {
              if (s > 0) return s - 1;
              return 0;
            })
          }
        >
          -
        </button>
        <span style={{ margin: "0px 10px" }}>Step: {step}</span>
        <button onClick={() => stateStep((s) => s + 1)}>+</button>
      </div>
      <br />
      <div>
        <button onClick={() => stateCount((s) => s - step)}>-</button>
        <span style={{ margin: "0px 10px" }}>Count: {count}</span>
        <button onClick={() => stateCount((s) => s + step)}>+</button>
      </div>
      <br />
      <div>
        <span>
          {count === 0
            ? "Today is "
            : count > 0 && count === 1
            ? `${count} day from today is `
            : count > 1
            ? `${count} days from today is `
            : Math.abs(count) === 1
            ? `${Math.abs(count)} day ago was `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
}
