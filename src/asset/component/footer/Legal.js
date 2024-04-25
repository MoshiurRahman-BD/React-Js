import  { Component } from 'react';
import { Col } from 'react-bootstrap';

class Legal extends Component {
  render() {
    return (
      <Col xs={12} md={6} lg={3}>
        <h4>Legal</h4>
        <p>Refund Policy</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </Col>
    );
  }
}

export default Legal;