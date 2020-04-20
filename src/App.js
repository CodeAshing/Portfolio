 import React from 'react';
import './App.css';
import LayoutComponent from './component/Layout';
import {  BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <Router>
        <div>
          <LayoutComponent/>
        </div>
    </Router>
  );
}

export default App;
