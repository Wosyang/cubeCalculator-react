import React, { useState } from 'react';

export default function App() {
  const [sideLength, setSideLength] = useState('');
  const [result, setResult] = useState('');

  const calculateCube = () => {
    const length = parseFloat(sideLength);

    if (isNaN(length)) {
      setResult('Invalid input. Please enter a valid number.');
    } else {
      const volume = length ** 3;
      setResult(`The volume of the cube is: ${volume}`);
    }
  };

  return (
    <div>
      <h1>Cube Calculator</h1>
      <label htmlFor="sideLength">Enter the side length:</label>
      <input
        type="number"
        id="sideLength"
        value={sideLength}
        onChange={(e) => setSideLength(e.target.value)}
      />
      <button onClick={calculateCube}>Calculate</button>
      <p>{result}</p>
    </div>
  );
}