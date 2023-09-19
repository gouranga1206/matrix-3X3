import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [box, setBox] = useState(Array(9).fill({ color: 'rgb(253, 250, 221)' }));
  const [clicks, setClicks] = useState([]);
  const [memory, setMemory] = useState([]);

  useEffect(() => {
    if (clicks.length === box.length) {
      // Change colors to orange based on the sequence in the memory array
      const updatedBox = [...box];

      memory.forEach((index, i) => {
        setTimeout(() => {
          updatedBox[index] = { ...updatedBox[index], color: 'orange' };
          setBox([...updatedBox]);
        }, (i + 1) * 1000);
      });
    }
  }, [clicks, box.length, memory]);

  const handleClick = (index) => {
    if (!clicks.includes(index)) {
      const updatedClicks = [...clicks, index];
      setClicks(updatedClicks);
      setMemory([...memory, index]); // Add the clicked box index to the memory

      // Change the clicked box color to green immediately
      const updatedBox = [...box];
      updatedBox[index] = { ...updatedBox[index], color: 'green' };
      setBox(updatedBox);
    }
  };

  return (
    <div id="matrix">
      <h1>Hello!</h1>
      <h2>I Remember the clicks:</h2>
      <h3>To check, click on me!!</h3>
      <div className="boxes">
        {box.map((boxItem, index) => (
          <div
            key={index}
            className="box-box"
            style={{ background: boxItem.color }}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
