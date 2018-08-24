import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onLoginSuccess } from '../actionCreator';
import '../supports/css/components/loginPage.css';

class loginPage extends Component {
    onLoginClick = () => {
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        let username = "";
        let check= false;
        
        for (let index in this.props.usersFriendly) {
            if(this.props.usersFriendly[index].email == email && 
               this.props.usersFriendly[index].password == password)
            {
                check = true;
                username = this.props.usersFriendly[index].username;
                break;
            }
        }

        if( check ) {
            this.props.onLoginSuccess({ username, email});
        }
    }

    render() {
        console.log(this.props.usersFriendly);
        console.log(this.props.theAuth);
        return(
            <div className="login-background">
            <div className="container">
                <h1 className="form-heading">login Form</h1>

                <div className="login-form">
                    <div className="main-div">
                        <div className="panel">
                            <h2>Admin Login</h2>
                            <p>Please enter your email and password</p>
                        </div>

                    <form id="Login">

                        <div className="form-group">
                            <input type="email" ref="email" className="form-control" id="inputEmail" placeholder="Email Address" />
                        </div>

                        <div className="form-group">
                            <input type="password" ref="password" className="form-control" id="inputPassword" placeholder="Password" />
                        </div>

                        <div className="forgot">
                            <a href="reset.html">Forgot password?</a>
                        </div>

                        <input type="button" className="btn btn-primary" value="Login" onClick={this.onLoginClick} />

                    </form>
                    
                    </div>

                    <p className="botto-text"> Designed by Putra</p>
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    const users = state.users;
    const auth = state.auth;

    return { usersFriendly: users, theAuth: auth };
}

export default connect(mapStateToProps, { onLoginSuccess })(loginPage);