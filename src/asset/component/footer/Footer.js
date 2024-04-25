import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Address from "./Address";
import FollowMe from "./FollowMe";
import Information from "./Information";
import Legal from "./Legal";

class Footer extends Component {
  render() {
    return (
      <div className="mt-5 py-5">
        <div className="py-5">
          <Container>
            <Row >
              <FollowMe />
              <Address />
              <Information />
              <Legal />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Footer;