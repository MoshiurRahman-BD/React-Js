import  { Component } from 'react';
import { Col } from 'react-bootstrap';

class Information extends Component {
  render() {
    return (
      <Col xs={12} md={6} lg={3}>
        <h4>Information</h4>
        <p>About Me</p>
        <p>My Resume</p>
        <p>Contact Me</p>
      </Col>
    );
  }
}

export default Information;