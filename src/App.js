import React, { Component } from 'react';
// import logo from './img/logo.svg';
// import logo from './img/logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (    
      <div className="App">
        <div className="App-header">
          <h2 style={{"display":"inline-block"}}><code> {"_>"}&nbsp;</code></h2>
          <h1 className="" style={{"display":"inline-block"}}><code>Code'n travel</code></h1>
        </div>
        <p className="App-intro w3-hide">
          Start of our journey <code>src/index.html</code>.
        </p>
      </div>
    );
  }
}

/*<img src={logo} style={{"display":"inline-block"}} className="App-logo" alt="logo" />*/
export default App;
