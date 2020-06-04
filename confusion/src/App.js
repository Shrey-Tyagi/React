import React, { Component } from 'react';


import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
//import DishDetail from './components/DishdetailComponent';
//import { DISHES } from './shared/dishes';


class App extends Component {
  
  

  render() {
    return (
      <div className="App">
        <Main />
      </div>
      
    );
  }
}


export default App;
