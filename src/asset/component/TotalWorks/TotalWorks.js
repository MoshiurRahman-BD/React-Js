import React, { Component } from 'react';
import { Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { FaCheckCircle as CheckIcon } from 'react-icons/fa'; // Import CheckIcon from react-icons

export default class TotalWorks extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="TotalWorks p-0">
          <div className="TotalWorksOverlay">
            <Row className="justify-content-center align-items-center">
              <Col xs={12} md={8} className="text-center counter">
                <Row>
                  <Col xs={12} md={4}>
                    <h4 className="countnumber">
                      <CountUp start={0} end={100}>
                        {({ countUpRef, start }) => (
                          <div>
                            <VisibilitySensor onChange={start}>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          </div>
                        )}
                      </CountUp>
                    </h4>
                    <h3 className="counttitle">Total Projects</h3>
                  </Col>
                  <Col xs={12} md={4}>
                    <h4>
                      <CountUp start={0} end={100}>
                        {({ countUpRef, start }) => (
                          <div>
                            <VisibilitySensor onChange={start}>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          </div>
                        )}
                      </CountUp>
                    </h4>
                    <h3>Total Clients</h3>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={4} className="countercard">
                <Card style={{ width: '100%' }}>
                  <Card.Body className="cardbody">
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      <p>
                        <CheckIcon style={{ color: 'blue' }} /> React JS Developer
                      </p>
                      <p>
                        <CheckIcon style={{ color: 'blue' }} /> React JS Developer
                      </p>
                      <p>
                        <CheckIcon style={{ color: 'blue' }} /> React JS Developer
                      </p>
                      <p>
                        <CheckIcon style={{ color: 'blue' }} /> React JS Developer
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </Fragment>
    );
  }
}
