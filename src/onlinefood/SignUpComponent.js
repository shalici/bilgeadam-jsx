import React, {Component} from 'react';
import AuthenticationService from "./AuthenticationService";

class SignUpComponent extends Component {
    constructor() {
        super();
        this.state = {
            username: null,
            password: null,
            isLoggedIn: null
        }
    }

    render() {
        return (
            <div className="sign">
                <h1>Login</h1>
                <div className="container">
                    User Name: <input type="text" name="username" value={this.state.username}
                                      onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password}
                                     onChange={this.handleChange}/>

                    {this.state.isLoggedIn && <div>Başarılı Kayıt</div>}
                    {this.state.isLoggedIn != null && !this.state.isLoggedIn &&
                    <div className="alert alert-warning">Kullanıcı veya şifre mevcut!</div>}
                    <button className="btn btn-success" onClick={this.loginClicked}>Kayıt Ol</button>
                </div>
            </div>
        )
    }

    signClicked = (event) => {
        if (this.state.username !== 'sehoffice' && this.state.password !== 'deneme') {
            console.log("SUCCESFULL");
            // this.setState({isLoggedIn: true});
            this.props.history.push(`/login`);
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

export default SignUpComponent;
