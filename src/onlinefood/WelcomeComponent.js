import {Link} from "react-router-dom";
import React,{Component} from 'react';
import HelloWorldService from "../api/HelloWorldService";

class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome</h1>
                <div className="container">
                    Welcome {this.props.match.params.name} Online Food App, restaurant meal
                    list is <Link to="/meallist">here</Link>
                </div>


                <div className="container">
                    Click here to get customized message from backend!
                    <button onClick={this.retrieveWelcomeMessage}
                    className="btn btn-success">Get Welcome Message</button>
                </div>
            </>
        );
    }

    retrieveWelcomeMessage = () =>{
        //console.log('message retrieve clicked!');
        HelloWorldService.executeHelloWorldService();
}
}

export default WelcomeComponent;