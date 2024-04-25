import  { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCirclePlay } from "react-icons/fa6";

class Videosec extends Component {
  render() {
    return (
      <div className='py-5'>
        <Container className='border p-5 rounded'>
        <div className='text-center'>
            <h2>Vedio Gallery</h2>
        </div>
        <Row>
          <Col className='text-center'>
            <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js</p>

              <FaCirclePlay size={60} color='#0073E7'/>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default Videosec;