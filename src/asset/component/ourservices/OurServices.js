import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import icon1 from '../../images/icon1.jpeg';
import icon2 from '../../images/icon2.jpeg';
import icon3 from '../../images/icon3.jpeg';


class OurServices extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h2 className='servicetitle text-center '>Our Services</h2>
                    <Row>
                        <Col lg={4} md={6} sm={12}>

                            <div className='servicecard text-center' >
                               <img src={icon1} alt="" /> 
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </div>

                        </Col> 




                        <Col  lg={4} md={6} sm={12}>
                            <div  className='servicecard text-center'>
                            <img src={icon2} alt="" /> 
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </div>


                        </Col>





                        <Col  lg={4} md={6} sm={12}>

                            <div  className='servicecard text-center'>
                            <img src={icon3} alt=""  /> 
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </div>

                        </Col>



                    </Row>




                </Container>





            </Fragment>
        );
    }
}

export default OurServices;