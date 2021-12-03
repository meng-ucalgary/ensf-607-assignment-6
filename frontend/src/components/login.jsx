import React, { useState, Component } from 'react';
import axios from 'axios';
import NavBarStart from './navbarstart';

class Login extends React.Component {

    state = {
        users: [],
        username: "",
        password: "",
        errorMessage: "",
        redirect: null
        // verifyUser: false,
    };

    async componentDidMount() {
        const { data: users } = await axios.get('http://localhost:8080/api/v1/users/', { headers: { 'Access-Control-Allow-Origin': true } });
        this.setState({ users });

        //const promise = axios.get('https://jsonplaceholder.typicode.com/posts')
    }

    getUsername = (e) => {
        console.log('Username: ', e.target.value)
        this.setState({ username: e.target.value })
    }

    getPassword = (e) => {
        console.log('Password: ', e.target.value)
        this.setState({ password: e.target.value })
    }



    render() {
        let hyperlink = ""
        let errorMessage = ""
        if (this.state.username != "" && this.state.password != "") {
            for (var i = 0; i < this.state.users.length; i++) {
                console.log("User: "+ this.state.users[i]["emailId"] + "  password: " +this.state.users[i]["passwordHash"]);


                //role 0 is for instructor
                if ((this.state.username == this.state.users[i]["emailId"]) && (this.state.password == this.state.users[i]["passwordHash"]) && (this.state.users[i]["role"] == "TEACHER")) {
                    console.log('Successful Login1');
                    hyperlink = "/i/menu"

                }

                //role 1 is for admin
                else if ((this.state.username == this.state.users[i]["emailId"]) && (this.state.password == this.state.users[i]["passwordHash"]) && (this.state.users[i]["role"] == "ADMIN")) {
                    console.log('Successful Login2');
                    hyperlink = "/a/menu"
                }

                //role 2 is for technician
                else if ((this.state.username == this.state.users[i]["emailId"]) && (this.state.password == this.state.users[i]["passwordHash"]) && (this.state.users[i]["role"] == "TECHNICIAN")) {
                    console.log('Successful Login3');
                    hyperlink = "/t/menu"
                }
                else {
                    console.log("Incorrect credentials");
                    errorMessage = "Click Login when full credentials entered"
                        //this.setState({errorMessage: "Incorrect credentials"});
                        ;
                }


            }
        }

        return <React.Fragment>
            <NavBarStart />
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
                                    <input type="text" class="form-control" onChange={(e) => this.getUsername(e)} />
                                </div>
                                <div class="form-group">
                                    <label class="form-control-label">Password</label>
                                    <input type="password" class="form-control" i onChange={(e) => this.getPassword(e)} />
                                </div>

                                <div >
                                    <a href={hyperlink} class="btn btn-primary">Login</a>
                                    <button type="submit" class="btn btn-outline-primary">Forget Password</button>

                                </div>
                                <div class="error">
                                    <h>  {errorMessage} </h>
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