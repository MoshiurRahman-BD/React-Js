import  { Component } from 'react';
import { Button, Card, Col } from 'react-bootstrap';

class SingleProjectCard extends Component {
  render() {
    const {image,title,description}= this.props.singleProject;
    return (
      <Col>
        <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body className='text-center'>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='small'>
          {description}
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
        
      </Col>
    );
  }
}

export default SingleProjectCard;