import React, { useContext } from "react";
import { myContext } from "./App";
import { Container, Row, Col } from "react-bootstrap";
import "./stylesheets/Board.css";

export default function Board({ board, clickedCells, handleClick }) {
  return (
    <Container>
      {board.map((row, index) => {
        return (
          <Row key={index}>
            {row.map((cell, cellIndex) => {
              const isCellClicked = clickedCells.some(
                (clickedCell) => clickedCell === cell.id
              );
              const cellContent = isCellClicked ? cell.id : "";
              return (
                <Col
                  key={cellIndex}
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: isCellClicked ? "white" : "gray",
                  }}
                  onClick={() => handleClick(cell.id)}
                >
                  {cellContent}
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Container>
  );
}
