import React from 'react';

import {Card} from 'react-bootstrap';

class Cardthird extends React.Component {

    render(){
    return (
      <Card style={{ width: '30rem'} }>
      <Card.Body>
        <Card.Title>Web Development</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Websites.</Card.Subtitle>
        <Card.Text>
          This website is developed using React.js and some of my work involve around e-commerce website clones.
        </Card.Text>
        <Card.Link href="https://github.com/pranavkumar7498/SmartHotel360-Website"><b>Link</b></Card.Link>
    
      </Card.Body>
    </Card>
  
    );
  }
  }
  
  export default Cardthird;
  