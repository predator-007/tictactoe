import './App.css';
import React, { useState } from 'react';
function App(props) {

  return (
    <div className="container">
      <Board />
    </div>

  );

}
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}><h1>{props.value}</h1></button>
  );
}
function Board() {
  const [BoardSquares, setBoardSquares] = useState(Array(9).fill(null));
  const [isxNext, setxNext] = useState(true);
  
  const handleclick = (index) => {
    const squares = [...BoardSquares];
    if (squares[index] || Check(squares)) return;
    squares[index] = isxNext ? "X" : "O";
    setBoardSquares(squares);
    setxNext(!isxNext);
  }
  const RenderS = (index) => {
    return (
      <Square value={BoardSquares[index]} onClick={() => handleclick(index)} />
    );
  }
  var status;
  var winner = Check(BoardSquares);
  if (winner) {
    if (winner === "X")
      status = "X is Winner";
    else
      status = "O is Winnner";
  }
  else {
    if (isxNext)
      status = "Next Player : X";
    else
      status = "Next Player : O";
  }
  return (
    <div>
    <div><h2>{status}</h2></div>
    <div className="grid-container">
      <div className="grid-item">{RenderS(0)}</div>
      <div className="grid-item">{RenderS(1)}</div>
      <div className="grid-item">{RenderS(2)}</div>
      <div className="grid-item">{RenderS(3)}</div>
      <div className="grid-item">{RenderS(4)}</div>
      <div className="grid-item">{RenderS(5)}</div>
      <div className="grid-item">{RenderS(6)}</div>
      <div className="grid-item">{RenderS(7)}</div>
      <div className="grid-item">{RenderS(8)}</div>
    </div>
    </div>

  );
}
function Check(squares) {
  const a = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < 8; i++) {
    const [x, y, z] = a[i];
    if (squares[x] === squares[y] && squares[y] === squares[z])
      return squares[x];
  }
  return null;
}
export default App;
