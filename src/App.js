
import React from 'react';
import {HashRouter} from 'react-router-dom';
import './App.css';

import Footer from'./Components/Footer';
import Header from'./Components/Header';


class App extends React.Component {
  
  render(){
  return (
    <HashRouter>
                <div className="page-container">
                  <div className="content-wrap">
                <div className="App Site">
                <div className="Site-content">
                    <div className="App-header">
                        <Header />
                    </div>
                    
                </div>
                </div>
                <Footer />
            </div>
            </div>
    </HashRouter>
  );
}
}

export default App;
