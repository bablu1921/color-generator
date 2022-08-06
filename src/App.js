import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [select, setSelect] = useState(10);
  const [list, setList] = useState(new Values("#2bc7d9").all(select));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let shades = parseInt(select);
      let colors = new Values(color).all(shades);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
      alert("pls enter a valid hexcolor");
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#2bc7d9"
            className={`${error ? "error" : null}`}
          />
          <input
            type="number"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
            placeholder="0 "
            className={`inputNumber${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
