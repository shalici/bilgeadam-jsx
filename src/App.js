import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Counter from "./components/counter/Counter";
import './components/counter/counter.css';
class App extends Component {
  render() {
    return (
        <div className="App">
          <Counter by1={1}/>
          <Counter by2={5}/>
          <Counter by3={10}/>
        </div>
    );
  }
}


class Components extends Component {
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