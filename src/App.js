import React, {Component} from 'react';
//import logo from './logo.svg';
import './bootstrap.css';
import './App.css';
import OnlineFoodApp from "./onlinefood/OnlineFoodApp";



class App extends  Component{
    render() {
        return (
            <div className="App">
                <OnlineFoodApp/>
                            </div>
        );
    }
}




export default App;
