import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import course1 from '../../images/course1.jpg';
import course2 from '../../images/course2.jpg';
import course3 from '../../images/course3.jpg';
import course4 from '../../images/course4.jpg';


class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h2 className='servicetitle text-center '>Our Courses</h2>
                    <Row>
                    <Col lg={5} md={6} sm={12}> 
        <Card className=" d-flex flex-row" >
          <div className="w-50">
          <Card.Img variant="" src={course1} className="img-fluid h-100" />
          </div>
          <div  className="w-50">
          <Card.Body className="w-100">
            <Card.Title className="fs-6">"Web Development"</Card.Title>
            <Card.Text className="small">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nisi cumque aliquam reiciendis atque numquam?"</Card.Text>
            <Button variant="primary" className="small">details</Button>
          </Card.Body>
          </div>
        </Card>
      </Col>




      <Col lg={5} md={6} sm={12}>
        <Card className=" d-flex flex-row" >
          <div className="w-50">
          <Card.Img variant="" src={course2} className="img-fluid h-100" />
          </div>
          <div  className="w-50">
          <Card.Body className="w-100">
            <Card.Title className="fs-6">"Web Development"</Card.Title>
            <Card.Text className="small">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nisi cumque aliquam reiciendis atque numquam?"</Card.Text>
            <Button variant="primary" className="small">details</Button>
          </Card.Body>
          </div>
        </Card>
      </Col>





      <Col lg={5} md={6} sm={12}>
        <Card className=" d-flex flex-row" >
          <div className="w-100">
          <Card.Img variant="" src={course3} className="img-fluid h-100" />
          </div>
          <div  className="w-50">
          <Card.Body className="w-100">
            <Card.Title className="fs-6">"Web Development"</Card.Title>
            <Card.Text className="small">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nisi cumque aliquam reiciendis atque numquam?"</Card.Text>
            <Button variant="primary" className="small">details</Button>
          </Card.Body>
          </div>
        </Card>
      </Col>

      <Col lg={5} md={6} sm={12}>
        <Card className=" d-flex flex-row" >
          <div className="w-200">
          <Card.Img variant="" src={course4} className="img-fluid h-100" />
          </div>
          <div  className="w-50">
          <Card.Body className="w-100">
            <Card.Title className="fs-6">"Web Development"</Card.Title>
            <Card.Text className="small">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nisi cumque aliquam reiciendis atque numquam?"</Card.Text>
            <Button variant="primary" className="small">details</Button>
          </Card.Body>
          </div>
        </Card>
      </Col>



                    </Row>




                </Container>





            </Fragment>
        );
    }
}

export default Courses;