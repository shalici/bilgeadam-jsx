import {Link} from "react-router-dom";
import React,{Component} from 'react';

class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome</h1>
                <div className="container">
                    Welcome {this.props.match.params.name} Online Food App, restaurant meal
                    list is <Link to="/meallist">here</Link>
                </div>
            </>
        );
    }
}

export default WelcomeComponent;