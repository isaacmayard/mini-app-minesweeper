import React, { useEffect, useState } from "react";
import Board from "./Board";
import "./stylesheets/App.css";

function App() {
  const [board, setBoard] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    //initialize new board
    const newBoard = [];

    // create rows
    let counter = 1;
    for (let row = 0; row < 10; row++) {
      const row = [];
      // create columns
      for (let col = 0; col < 10; col++) {
        row.push(counter);
        counter++;
      }
      newBoard.push(row);
    }
    setBoard(newBoard);
    setLoaded(true);
  }, []);

  return <div>{loaded ? <Board board={board} /> : <></>}</div>;
}

export default App;
