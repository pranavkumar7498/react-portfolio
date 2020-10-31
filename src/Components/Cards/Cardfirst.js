import React from 'react';

import {Card} from 'react-bootstrap';

class Cardfirst extends React.Component {

    render(){
    return (
      <Card style={{ width: '30rem'} }>
      <Card.Body>
        <Card.Title>Competitive Programming</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">DS and Algorithms.</Card.Subtitle>
        <Card.Text>
          I have solved some problems from various online judge for competitive programming.
        </Card.Text>
        <Card.Link href="https://github.com/pranavkumar7498/Algorithms"><b>Link</b></Card.Link>
      </Card.Body>
    </Card>
  
    );
  }
  }
  
  export default Cardfirst;
  