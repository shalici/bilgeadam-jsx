import AuthenticationService from "./AuthenticationService";
import React,{Component} from 'react';
import {Link} from "react-router-dom";
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
                    <button className="btn btn-success"><Link to="/signup">Kayıt Ol</Link></button>

                    <div className="App-link"><Link to="/forgetpassword">Şifremi Unuttum?</Link></div>
                </div>
            </div>
        )
    }

    loginClicked = (event) => {
        if (this.state.username === 'sehoffice' && this.state.password === 'deneme') {
            console.log("SUCCESFULL");
            // this.setState({isLoggedIn: true});
            this.props.history.push(`/welcome/${this.state.username}`);
            AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password);
        } else {
            console.log("ACCESS DENIED");
            this.setState({isLoggedIn: false});
        }
        //console.log(this.state)
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    singClicked = (event) => {
        if (this.state.username !== 'sehoffice' && this.state.password !== 'deneme') {
            console.log("SUCCESFULL");
            // this.setState({isLoggedIn: true});
            this.props.history.push(`/welcome/${this.state.username}`);
            AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password);
        } else {
            console.log("ACCESS DENIED");
            this.setState({isLoggedIn: false});
        }
        //console.log(this.state)
    };


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

export default LoginComponent;
