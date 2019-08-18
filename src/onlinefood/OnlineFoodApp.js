import React, {Component} from 'react';
//import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import AuthenticatedRoute from "./AuthenticatedRoute";
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import ErrorComponent from './ErrorComponent';
import FooterComponent from './FooterComponent';
import LogoutComopnent from './LogoutComponent';
import MealListComponent from './MealListComponent';
import CreateMeal from './CreateMeal';
import DeleteMeal from "./DeleteMeal";
import UpdateMeal from "./UpdateMeal";


class OnlineFoodApp extends Component {
    render() {
        return (
            <div className="onlineFoodApp">

                <Router>
                    <>
                        <HeaderComponent/>
                        <br/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/meallist" component={MealListComponent}/>
                            <Route path="/logout" component={LogoutComopnent}/>
                            <AuthenticatedRoute path="/createmeal" component={CreateMeal}/>
                            <AuthenticatedRoute path="/deletemeal" component={DeleteMeal}/>
                            <AuthenticatedRoute path="/updatemeal" component={UpdateMeal}/>

                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
            </div>
        );
    }
}

export default OnlineFoodApp;