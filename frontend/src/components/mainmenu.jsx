import React, { Component } from 'react';
import NavBar from './navbar';

class MainMenu extends React.Component {
    state = {
        
        
        
        userImageUrl: process.env.PUBLIC_URL + '/users.png',
        animalImageUrl: process.env.PUBLIC_URL + '/animals.png',
        submitImageUrl: process.env.PUBLIC_URL + '/requestsubmission.png',
        requestImageUrl: process.env.PUBLIC_URL + '/requests.png',

        
        
        
    };
    styles = {
        width: 18+'rem'
        

    };
    render() { 
        const user = this.props.match.params.user;
        if(user == "i"){
            return <React.Fragment>
                <NavBar user = {user}/>
                <div class="row">
                <div class="card" style={this.styles}>
                    <img class="card-img-top" src={this.state.userImageUrl} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">User Management</h5>
                        <a href="/i/users" class="btn btn-primary">Go</a>
                    </div>
                </div>

                <div class="card" style={this.styles}>
                    <img class="card-img-top" src={this.state.animalImageUrl} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Animal Management</h5>
                        <a href="/i/animals" class="btn btn-primary">Go</a>
                    </div>
                </div>
                <div class="card" style={this.styles}>
                    <img class="card-img-top" src={this.state.submitImageUrl} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Request Submission</h5>
                        <a href="/i/requestsubmission" class="btn btn-primary">Go</a>
                    </div>
                </div>
                
                </div>
            </React.Fragment>;

        }

        if(user == "a"){
            return <React.Fragment>
                <NavBar user = {user}/>
                <div class="row">
                <div class="card" style={this.styles}>
                    <img class="card-img-top" src={this.state.userImageUrl} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">User Management</h5>
                        <a href="/a/users" class="btn btn-primary">Go</a>
                    </div>
                </div>

                <div class="card" style={this.styles}>
                    <img class="card-img-top" src={this.state.animalImageUrl} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Animal Management</h5>
                        <a href="/a/animals" class="btn btn-primary">Go</a>
                    </div>
                </div>
                
                <div class="card" style={this.styles}>
                    <img class="card-img-top" src={this.state.requestImageUrl} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Request Management</h5>
                        <a href="/a/requestmanagment" class="btn btn-primary">Go</a>
                    </div>
                </div>
                </div>
            </React.Fragment>;

        }

        if(user == "t"){
            return <React.Fragment>
                <NavBar user = {user}/>
                <div class="row">
                <div class="card" style={this.styles}>
                    <img class="card-img-top" src={this.state.userImageUrl} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">User Management</h5>
                        <a href="/t/users" class="btn btn-primary">Go</a>
                    </div>
                </div>

                <div class="card" style={this.styles}>
                    <img class="card-img-top" src={this.state.animalImageUrl} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Animal Management</h5>
                        <a href="/t/animals" class="btn btn-primary">Go</a>
                    </div>
                </div>
                
                <div class="card" style={this.styles}>
                    <img class="card-img-top" src={this.state.requestImageUrl} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Request Management</h5>
                        <a href="/t/requestmanagment" class="btn btn-primary">Go</a>
                    </div>
                </div>
                </div>
            </React.Fragment>;

        }
        
    }
}
 
export default MainMenu;