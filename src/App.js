import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Counter from "./components/counter/Counter";

class App extends Component {
  render() {
    return (
        <div className="App">
          Hello World!
          <Component1/>
          <Component2/>
          <Component3/>
          <Counter/>
        </div>
    );
  }
}



export default App;