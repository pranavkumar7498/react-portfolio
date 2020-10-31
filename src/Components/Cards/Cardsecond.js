import React from 'react';

import {Card} from 'react-bootstrap';

class Cardsecond extends React.Component {

    render(){
    return (
      <Card style={{ width: '30rem'} }>
      <Card.Body>
        <Card.Title>Traffic Surveillance using computer vision.</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Machine Learning</Card.Subtitle>
        <Card.Text>
          This project aims to build a sophisticated model to count number of vehicle entered into a city on particular day.
        </Card.Text>
        <Card.Link href="https://github.com/pranavkumar7498/Customer_churn_prediction_Project"><b>Link</b></Card.Link>
      
      </Card.Body>
    </Card>
  
    );
  }
  }
  
  export default Cardsecond;
  