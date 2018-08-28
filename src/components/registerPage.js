import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../supports/css/components/loginPage.css';
import { onRegister } from '../actionCreator';
import { Redirect } from 'react-router-dom';

class registerPage extends Component {

    onRegisterCLick = () => {
        this.props.onRegister({ 
            username: this.refs.username.value,
            email: this.refs.email.value,
            password: this.refs.password.value
        }); 
    }

    render() {
        if(this.props.auth.username == "") {
            return(
                <div className="login-background">
                <div className="container">
                    <h1 className="form-heading">Register Form</h1>
    
                    <div className="login-form">
                        <div className="main-div">
                            <div className="panel">
                                <h2>Register your ID </h2>
                                <p>Please enter your detail</p>
                            </div>
    
                        <form id="Login">
    
                            <div className="form-group">
                                <input type="email" ref="email" className="form-control" id="inputEmail" placeholder="Email Address" />
                            </div>
    
                            <div className="form-group">
                                <input type="password" ref="password" className="form-control" id="inputPassword" placeholder="Password" />
                            </div>
    
                            <div className="form-group">
                                <input type="text" ref="username" className="form-control" id="inputUserName" placeholder="User Name" />
                            </div>
    
                            <div className="forgot">
                                <a href="reset.html">Forgot password?</a>
                            </div>
    
                            <input type="button" className="btn btn-primary" value="Register" onClick={this.onRegisterCLick}/>
    
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
    return { auth: state.auth}
}

export default connect(mapStateToProps, {onRegister})(registerPage);