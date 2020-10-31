import React from 'react';
import './Header.css';
import {  HashRouter, Route, Switch,Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Work from './Work';
class Header extends React.Component {
    render()
    {
    return (
<HashRouter>
<nav className="navbar">
   
    <h4><b>Welcome !!</b></h4>  

<ul className="navbar--link">
    <li className="navbar--link-item">
        <Link to="/"><b>Home</b></Link>
    </li>
    <li className="navbar--link-item">
        <Link to="/about"><b>About</b></Link>
    </li>
    <li className="navbar--link-item">
        <Link to="/work"><b>Work</b></Link>
    </li>        
    <li className="navbar--link-item">
        <Link to="/contact"><b>Contact</b></Link>
    </li>
</ul>
  </nav>
        
              
    
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/work' component={Work} />
                <Route path='/contact' component={Contact} />
            </Switch>
      
    </HashRouter>
    );
}
}
export default Header;