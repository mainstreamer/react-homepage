import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Component01 from './Component01';
import './css/index.css';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// ReactDOM.render(
//     <Snake />,
//     document.getElementById('snake')
// );

ReactDOM.render(
  <Component01 />,
  document.getElementById('root2')
);
