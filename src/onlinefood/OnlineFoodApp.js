import React, {Component} from 'react';
//import logo from './logo.svg';




class OnlineFoodApp extends Component {
    render() {
        return (
            <div className="onlineFoodApp">
            Online Food App
                <LoginComponent/>
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
                User Name: <input type="text" name="username" value={this.state.username}
                                  onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password}
                                 onChange={this.handleChange}/>

                {this.state.isLoggedIn && <div>Başarılı Giriş</div>}
                {this.state.isLoggedIn != null && !this.state.isLoggedIn && <div>Kullanıcı veya şifre hatalı!</div> }
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

    loginClicked = (event) => {
        if (this.state.username === 'sehoffice' && this.state.password === 'deneme') {
            console.log("SUCCESFULL");
            this.setState({isLoggedIn: true});
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




export default OnlineFoodApp;