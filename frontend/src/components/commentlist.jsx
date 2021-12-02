import React, { Component } from 'react';
import axios from "axios";
import {getAnimalbyId} from '../services/fakeAnimalsService'; 
import NavBar from './navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class CommentList extends React.Component {
    state = {
        animal: {},
        
        
        imageUrl: 'https://picsum.photos/200',

        
        
        
    };

    async componentDidMount() {
        const id = this.props.match.params.id;
        const {data: posts} = await axios.get('http://localhost:8080/api/v1/animals/'+{id}, {headers: {'Access-Control-Allow-Origin': true,},});
        
        this.setState({posts});
        

        

        
            
        //const promise = axios.get('https://jsonplaceholder.typicode.com/posts')
        
    }


    componentWillMount() {
        const id = this.props.match.params.id;
        console.log(id);


        this.setState({animal: getAnimalbyId(id), 
            
        });

 }

    render() { 
        console.log(this.state.animal["animalCommentList"]);
        return <React.Fragment>
            <NavBar/>
            <h2 class="display-4">Comment Logs</h2>
            <div class="row">
                    <div class="col-sm">
                        <img src={this.state.imageUrl} alt=""/>

                    </div>
                    <div class="col-sm">
                        <div class="jumbotron jumbotron-fluid">
                            <div class="container">
                                <h1 class="display-4">Basic Details</h1>
                                <p class="lead">Animal ID: {this.state.animal["animalId"]}</p>
                                <p class="lead">Name: {this.state.animal["name"]}</p>
                                <p class="lead">Breed: {this.state.animal["breed"]}</p>
                                <p class="lead">Age: {this.state.animal["age"]}</p>
                                <p class="lead">Sex: {this.state.animal["animalId"]}</p>
                                <p class="lead">Status: {this.state.animal["sex"]}</p>
                            </div>
                        </div>
                    </div>
                    
            </div>

            <div class="row">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Log History</h1>
                        {this.state.animal["animalCommentList"].map(comment =>(
                            <div class="card" style={this.styles}>
                            <p>Log {comment["commentid"]}: {comment["date"]}</p>
                            
                            <p>{comment["commentdesc"]}</p>
                            <td><Link to={"/animals/"+this.state.animal["animalId"].toString()} className="btn btn-secondary btn-sm">Edit</Link><Link to={"/animals/"+this.state.animal["animalId"].toString()} className="btn btn-secondary btn-sm">Remove</Link></td>
                            <p></p>
                            <p></p>
                            </div>
                            

                        ))}
                    </div>
                </div>

            </div>
        </React.Fragment>;
    }
}
 
export default CommentList;