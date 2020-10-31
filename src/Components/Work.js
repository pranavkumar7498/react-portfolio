import React from 'react';
import Cardfirst from './Cards/Cardfirst';
import Cardsecond from './Cards/Cardsecond';
import Cardthird from './Cards/Cardthird';

import './Work.css'
class Work extends React.Component {

    render(){
    return (
      <div className='puy'>
    <div className="pageme">
      <Cardfirst/>
      <Cardsecond/>
      <Cardthird/>
    </div>
    </div>
  
    );
  }
  }
  
  export default Work;
  