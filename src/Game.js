import { useState } from "react";
import Board from "./Board";
export default Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentStep, setCurrentStep] = useState(0);
  const xIsNext = currentStep % 2 === 0;
  const currentSquares = history[currentStep];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentStep + 1), nextSquares];
    console.log(nextHistory);
    setHistory(nextHistory);
    setCurrentStep(nextHistory.length - 1);
    console.log(currentStep);
    console.log(xIsNext);
  };

  const jumpTo = (nextMove) => {
    setCurrentStep(nextMove);
  };

  const moves = history.map((squares, index) => {
    let description = "Go to game start";
    if (index > 0) {
      description = "Go to move #" + index;
    }
    return (
      <li key={index}>
        <button onClick={() => jumpTo(index)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
