import React, { Component } from 'react';


import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
//import DishDetail from './components/DishdetailComponent';
//import { DISHES } from './shared/dishes';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  
  

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
      
    );
  }
}


export default App;
