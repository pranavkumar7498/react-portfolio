import React from 'react';
import './Img/Author.jpeg';
import './Home.css'
import { Button } from 'react-bootstrap';

const Home = ()=>{

    return(
    
    <div>
        <div className="home_container">
            <div className="home_head_wrapper">
            <div class="twoColumn">
        <img src={require('./Img/Author.jpeg')} height="270" />
               </div>
            < h1 > <b>Hello I 'm</b> <br></br> <span>Pranav Kumar</span></h1>
            <h6><b>I'm a software developer working in India.</b><br></br> </h6>
            <h6><b>My interest lies in area of Artificial Intelligence and Web Development.</b></h6>
            <h6><b>Check out my work on below link.</b></h6>
            </div>
            <a class="btn btn-info" href="https://github.com/pranavkumar7498" role="button">Let's Explore</a>
        </div>
    </div>
    )
}

  
  export default Home;
  