import { Component } from "react";
import { Col } from "react-bootstrap";

class Address extends Component {
  render() {
    return (
      <Col xs={12} md={6} lg={3}>
        <h4>Address</h4>
        <p>Chapain, Savar, Dhaka</p>
      </Col>
    );
  }
}

export default Address;