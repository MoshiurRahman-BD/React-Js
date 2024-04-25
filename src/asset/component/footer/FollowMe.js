import  { Component } from 'react';
import { Col } from 'react-bootstrap';
import { FaFacebook,FaYoutube  } from "react-icons/fa";

class FollowMe extends Component {
  render() {
    return (
      <Col xs={12} md={6} lg={3}>
      <h4>Follow Me</h4>
      <p><FaFacebook/><span> Facebook</span></p>
      <p><FaYoutube/><span> Youtube</span></p>
        
      </Col>
    );
  }
}

export default FollowMe;