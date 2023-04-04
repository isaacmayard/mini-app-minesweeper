import {Container, Row, Col} from 'react-bootstrap'
import './stylesheets/Board.css'

export default function Board({ board }) {
    console.log(board)
  return (
    <Container>
      {board.map((row, index) => {
        return (
          <Row key={index}>
            {row.map((num, ind) => {
              return <Col key={ind} onClick={() => console.log(`You clicked on ${num}`)}>{num}</Col>;
            })}
          </Row>
        );
      })}
    </Container>
  );
}
