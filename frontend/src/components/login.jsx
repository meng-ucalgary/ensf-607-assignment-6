import React, { useState, Component } from 'react';
import NavBarStart from './navbarstart';
import {getUsers} from './../services/fakeUserService';  

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

    
    
    render() { 
        let hyperlink = ""
        let errorMessage = ""
        if (this.state.username != "" && this.state.password !="") {
            for (var i=0; i<this.state.users.length; i++) {
                //console.log(this.state.users[1]["emailId"])
            
                //role 0 is for instructor
                if ((this.state.username == this.state.users[i]["emailId"]) && (this.state.password == this.state.users[i]["u_passwordhash"]) && (this.state.users[i]["role"] == "0")) {
                    console.log('Successful Login1');
                    hyperlink = "/i/menu" 
                    
                }

                //role 1 is for admin
                else if ((this.state.username == this.state.users[i]["emailId"]) && (this.state.password == this.state.users[i]["u_passwordhash"]) && (this.state.users[i]["role"] == "1")) {
                    console.log('Successful Login2');
                    hyperlink = "/a/menu" 
                }

                //role 2 is for technician
                else if ((this.state.username == this.state.users[i]["emailId"]) && (this.state.password == this.state.users[i]["u_passwordhash"]) && (this.state.users[i]["role"] == "2")) { 
                    console.log('Successful Login3');
                    hyperlink = "/t/menu" 
                }        
                else {
                    console.log("Incorrect credentials");
                    errorMessage = "Current credentials are incorrect. Please continue.."
                    //this.setState({errorMessage: "Incorrect credentials"});
                ;
                }
                

            }
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
                                    
                                    <div >
                                        <a href = {hyperlink} class="btn btn-primary">Login</a>
                                        <button type="submit" class="btn btn-outline-primary">Forget Password</button>
                                        
                                    </div>
                                    <div class="error">
                                        <h>  { errorMessage } </h> 
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