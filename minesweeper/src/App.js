import React, { useEffect, useState, createContext } from "react";
import Board from "./Board";
import "./stylesheets/App.css";

export const myContext = createContext();

function App() {
  const [board, setBoard] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [clickedCells, setClickedCells] = useState([]);

  useEffect(() => {
    //initialize new board
    const newBoard = [];

    // create rows
    let counter = 1;
    for (let row = 0; row < 10; row++) {
      const newRow = [];
      // create columns
      for (let col = 0; col < 10; col++) {
        let cell = {
          id: counter,
          wasClicked: false,
          isBomb: false,
          adjacentBombCount: 0,
          flagged: false,
        };

        newRow.push(cell);
        counter++;
      }
      newBoard.push(newRow);
    }
    setBoard(newBoard);
    setLoaded(true);
  }, []);

  const handleClick = (cellId) => {
    // find the clicked cell and mark it as clicked
    setClickedCells([...clickedCells, cellId]);
    const updatedCells = board.map((row) => {
      return row.map((cell) => {
        if (cell.id === cellId) {
          return { ...cell, wasClicked: true };
        }
        return cell;
      });
    });
    setBoard(updatedCells);
  };

  return (
    <myContext.Provider value={board}>
      {loaded ? (
        <Board
          board={board}
          clickedCells={clickedCells}
          handleClick={handleClick}
        />
      ) : (
        <></>
      )}
    </myContext.Provider>
  );
}

export default App;
