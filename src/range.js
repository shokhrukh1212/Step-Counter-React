import { useState } from "react";
import "./index.css";

export default function Range() {
  const [count, setCount] = useState(0);
  const [range, setRange] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function onInput(event) {
    setRange(Number(event.target.value));
  }

  function onReset() {
    setCount(0);
    setRange(1);
  }

  function onInputChange(e) {
    setCount(Number(e.target.value));
  }

  return (
    <div className="container">
      <div>
        <input
          type="range"
          min="1"
          max="10"
          step="1"
          value={range}
          onInput={onInput}
        />
        <span>Step: {range}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - range)}>-</button>
        <input value={count} onInput={onInputChange} />
        <button onClick={() => setCount((c) => c + range)}>+</button>
      </div>

      <p>
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
        <span>
          <b>
            <i>{date.toDateString()}</i>
          </b>
        </span>
      </p>

      {(count !== 0 || range !== 1) && <button onClick={onReset}>Reset</button>}
    </div>
  );
}
