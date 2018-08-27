import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { onLogin } from '../actionCreator';

import '../supports/css/components/loginPage.css';

class loginPage extends Component {

    state = {
        count: 0
    }

    onLoginClick = () => {
        let email = this.refs.email.value;
        let password = this.refs.password.value;

        this.props.onLogin({ email, password});

        this.setState(
            {
            count: this.state.count + 1
            }
        );
    }

    render() {
        console.log(this.state.count);
        if(this.props.auth.username == "" && this.state.count == 0){
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

        else if(this.props.auth.username == "" && this.state.count != 0) {
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

                            <p style={{ color: "red" }}>Autentication Failed</p>

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
        

                return <Redirect to="/" />
            }
        }
        

const mapStateToProps = (state) => {
    const auth = state.auth;

    return { auth: auth };
}

export default connect(mapStateToProps, { onLogin })(loginPage);