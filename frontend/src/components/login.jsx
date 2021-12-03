

import React, { useState, Component } from 'react';
import NavBarStart from './navbarstart';
import {getUsers} from './../services/fakeUserService';  
import { useHistory } from 'react-router-dom';
class Login extends React.Component {
    
    state = {
        users:getUsers(),
        username: "",
        password: "",
        errorMessage: "",
        redirect:null
       // verifyUser: false,
    };

   
    getUsername = (e) => {
        console.log('Username: ', e.target.value)
        this.setState({username: e.target.value})
    }

    getPassword = (e) => {
        console.log('Password: ', e.target.value)
        this.setState({password: e.target.value})
    }

    //verifyUser = getUsers().map(users => {
    /*
    verifyUser = (e) => {
        
        for (var i=0; i<this.state.users.length; i++) {
           
            //console.log(this.state.users[1]["emailId"])
        
            //role 0 is for instructor
            if ((this.state.username == this.state.users[i]["emailId"]) && (this.state.users[i]["password"] == this.state.users[i]["u_passwordhash"]) && (this.state.users[i]["role"] = "0")) {
                console.log('Successful Login1');
                //<a href="/i/menu" class="btn btn-primary"/>
                //this.setState({ redirect: "/i/menu" });
                
            }

            //role 1 is for admin
            else if ((this.state.username == this.state.users["emailId"]) && (this.state.users["password"] == this.state.users["u_passwordhash"]) && (this.state.users[i]["role"] = "1")) {
                console.log('Successful Login');
                <a href="/a/menu" class="btn btn-primary"/>
            }

            //role 2 is for technician
            else if ((this.state.username == this.state.users[i]["emailId"]) && (this.state.users[i]["password"] == this.state.users["u_passwordhash"]) && (this.state.users[i]["role"] = "2")) {   
                console.log('Successful Login');
                <a href="/t/menu" class="btn btn-primary"/>
            }

            // else {
            //     console.log("Incorrect credentials");
            //     this.setState({errorMessage: "Incorrect credentials"});
            // }
            

        }
    }
    */
    
    
    render() { 
        let hyperlink = ""

        for (var i=0; i<this.state.users.length; i++) {
           
            //console.log(this.state.users[1]["emailId"])
        
            //role 0 is for instructor
            if ((this.state.username == this.state.users[i]["emailId"]) && (this.state.users[i]["password"] == this.state.users[i]["u_passwordhash"]) && (this.state.users[i]["role"] = "0")) {
                console.log('Successful Login1');
                hyperlink = "/i/menu" 
            }

            //role 1 is for admin
            else if ((this.state.username == this.state.users["emailId"]) && (this.state.users["password"] == this.state.users["u_passwordhash"]) && (this.state.users[i]["role"] = "1")) {
                console.log('Successful Login2');
                hyperlink = "/a/menu" 
            }

            //role 2 is for technician
            else if ((this.state.username == this.state.users[i]["emailId"]) && (this.state.users[i]["password"] == this.state.users["u_passwordhash"]) && (this.state.users[i]["role"] = "2")) {   
                console.log('Successful Login3');
                hyperlink = "/t/menu" 
            }

            // else {
            //     console.log("Incorrect credentials");
            //     this.setState({errorMessage: "Incorrect credentials"});
            // }
            

        }
 
        return <React.Fragment>
            <NavBarStart/>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-2"></div>
                    <div class="col-lg-6 col-md-8 login-box">                        
                        <div class="col-lg-12 login-title">
                            Sign in to your account
                        </div>

                        <div class="login-form">
                            
                                <form>
                                    <div class="form-group">
                                        <label class="form-control-label" >Username</label>
                                        <input type="text" class="form-control"onChange = {(e) => this.getUsername(e)}/>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-control-label">Password</label>
                                        <input type="password" class="form-control" i onChange = {(e) => this.getPassword(e)}/>
                                    </div>
                                    {/* <div class="error">
                                        <h3>  { this.state.errorMessage } </h3> 
                                    </div> */}
                                    <div >
                                        <a href = {hyperlink} class="btn btn-primary">Login</a>
                                        {/* <a href="/menu" class="btn btn-primary">Login</a> */}
                                        {/* <a  class="btn btn-primary" onclick = {(e) => this.verifyUser(e)}>Login</a> */}
                                        {/* <button type="submit" class="btn btn-primary" onClick = {(e) => this.verifyUser(e)} >Login</button> */}
                                        <button type="submit" class="btn btn-outline-primary">Forget Password</button>
                                        
                                    </div>
                                </form>
                            
                        </div>
                        
                    </div>
                </div>
            </div>



            </React.Fragment>;
    }
}
 
export default Login;