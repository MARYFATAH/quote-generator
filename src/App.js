import './App.css';
import QuoteFetch from './QuoteFetch';
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
  return (
    <Container className="bg-danger m-5 vh-100 d-flex ">
      <Row className='md m-auto align-self-center'>
        <Col className='md'>
          <QuoteFetch/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
