import React, {Component} from 'react';
//import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch,Link,} from "react-router-dom";



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
                            <Route path="/welcome/:name" component={WelcoemComponent}/>
                            <Route path="/meallist" component={MealList}/>
                            <Route path="/logout" component={LogoutComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>

                        <FooterComponent/>
                    </>
                </Router>
            </div>
        );
    }
}


class LoginComponent extends Component {
    constructor() {
        super();
        this.state = {
            username: "sehoffice",
            password: "deneme",
            isLoggedIn: null
        }
    }

    render() {
        return (
            <div className="login">
                <h1>Login</h1>
                <div className="container">
                    User Name: <input type="text" name="username" value={this.state.username}
                                      onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password}
                                     onChange={this.handleChange}/>

                    {this.state.isLoggedIn && <div>Başarılı Giriş</div>}
                    {this.state.isLoggedIn != null && !this.state.isLoggedIn &&
                    <div className="alert alert-warning">Kullanıcı veya şifre hatalı!</div>}
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }

    loginClicked = (event) => {
        if (this.state.username === 'sehoffice' && this.state.password === 'deneme') {
            console.log("SUCCESFULL");
            this.setState({isLoggedIn: true});
            this.props.history.push(`/welcome/${this.state.username}`);
        } else {
            console.log("ACCESS DENIED");
            this.setState({isLoggedIn: false});
        }
        //console.log(this.state)
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
}

// function LoginMessage(props){
//     if(props.isLoggedIn === null)
//         return null;
//     else if(props.isLoggedIn)
//         return <div>Başarılı Giriş</div>
//     else if(!props.isLoggedIn)
//         return <div>Kullanıcı veya şifre hatalı!</div>
//
//
//}


function ErrorComponent() {
    return <div>An error occured!</div>

}


class WelcoemComponent extends Component {
    render() {
        return <div>Welcome {this.props.match.params.name} Online Food App, restaurant meal list is <Link to ="/meallist">here</Link>  </div>

    }
}


class MealList extends Component {
    constructor() {
        super();
        this.state = {
            //meal : {code: 'MNT1', name: 'Mantı', price: 12, photo: 'text', detail: 'Süper bi yemek!'}
            meal: [
                {code: 'MNT1', name: 'Mantı', price: 12, photo: 'text', detail: 'Süper bi yemek!'},
                {code: 'CRB1', name: 'Çorba', price: 12, photo: 'text', detail: 'Süper bi yemek!'},
                {code: 'PD1', name: 'Pide', price: 12, photo: 'text', detail: 'Süper bi yemek!'}
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>Meal List</h1>
                <table>
                    <thead>
                    <tr>
                        <th>CODE</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>PHOTO</th>
                        <th>DETAIL</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.meal.map(
                            meal =>
                                <tr>
                                    <td>{meal.code}</td>
                                    <td>{meal.name}</td>
                                    <td>{meal.price}</td>
                                    <td>{meal.photo}</td>
                                    <td>{meal.detail}</td>
                                </tr>
                        )

                    }


                    </tbody>
                </table>
            </div>
        )
    }
}

class HeaderComponent extends Component{
    render() {
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://localhost:3000" className="navbar-brand"> Online Foot App</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/welcome/sehoffice">Home</Link></li>
                        <li><Link className="nav-link" to="/meallist">Meals</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link  className="nav-link" to="/login">Login</Link></li>
                        <li><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
            // <div>
            //     HEADER <hr/>
            // </div>
        )
    }
}

class LogoutComponent extends Component{
    render() {
        return (
            <div>
                <h1>You are logged out!</h1>
                <div className="container">
                    Thank you for using Online Food App!
                </div>
            </div>
        );
    }
}

class FooterComponent extends Component{
    render() {
        return(
            <footer className="footer">
                <span className="text-muted">All rights reserved 2019 - Online Food App - Created By SEHOFFICE</span>
            </footer>
        )
    }

}


export default OnlineFoodApp;