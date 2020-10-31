import React from 'react';
import './About.css';
import {Jumbotron} from 'react-bootstrap';

class About extends React.Component {

    render(){
    return (

      <Jumbotron>
        <div className="qwe">
      <h1>About me</h1>
<p><b>Hello, my name is Pranav. I'm a software developer with experience in React, HTML, CSS, Computer vision and machine learning.</b></p>

<p><b>My dream is to one day start my own business and become an entrepreneur.</b></p>

<p><b>I'm constantly learning new things. Currently those things include gaining more experience with React, Express JS, and Node JS.</b></p>
<p><b>I have pursued my bachelor's in electronics and communincation. With strong fundamental skills I love solving real world problems.</b></p>
<p><b>Click on Learn more to check out more.</b></p>

<a class="btn btn-info" href="https://www.linkedin.com/in/pranav-kumar-81575714a/" role="button">Learn More</a>
</div>
    </Jumbotron>
  
    );
  }
  }
  
  export default About;
  