import './App.css';
import QuoteFetch from './QuoteFetch';
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
  return (
    <Container className="bg-danger h-5 justify-content-center m-5 d-block  vw-50 vh-40 align-items-center">
      <Row className=" justify-content-md-center">
        <Col className='md'>
          <QuoteFetch/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
