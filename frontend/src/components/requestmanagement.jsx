import React, { Component } from 'react';

import {getAnimals} from '../services/fakeAnimalsService';
import {postAnimal} from '../services/fakeAnimalsService';
import axios from 'axios';
import NavBar from './navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class RequestManagement extends React.Component {
    state = {
        //animals: [],
        animals: getAnimals(),
        filterOption: 0,
        filterText: "",
        pageSize: 10,
        alertmsg:""
        

    };

    handleInputText =(e)=>{
      this.setState({inputText:e.target.value});
      //this.setState({filterOption: 1});
      console.log("tedt changed", this.state.filterText);

  };

    handleFilter =(e)=>{
        this.setState({filterOption:e.target.value});
        //this.setState({filterOption: 1});
        console.log("ID clicked", this.state.filterOption);

    };

    handleFilterText =(e)=>{
        this.setState({filterText:e.target.value});
        //this.setState({filterOption: 1});
        console.log("tedt changed", this.state.filterText);

    };

    handleAccept =(e, animal)=>{
        this.setState({alertmsg:"  Request is Accepted for: " + animal["name"]});
        const user = this.props.match.params.user;
        if(user == "t"){
            postAnimal(animal["animalId"], "status", "TECHNICIAN_APPROVAL");

        } else if(user =='a'){
            postAnimal(animal["animalId"], "status", "ACCEPTED_BY_ADMIN");
        }
        
        this.setState({animals: getAnimals()});
  
  
        
  
    };

    handleReject =(e, animal)=>{
        this.setState({alertmsg:"  Request is rejected for: " + animal["name"]});
        postAnimal(animal["animalId"], "status", "GREEN");
        this.setState({animals: getAnimals()});
        
  
  
        
  
    };




    

    async componentDidMount() {
        
      //const {data: animals} = await axios.get('http://localhost:8080/api/v1/animals/', {headers: {'Access-Control-Allow-Origin': true,},});
      
      //this.setState({animals});

      
          
      //const promise = axios.get('https://jsonplaceholder.typicode.com/posts')
      
  }




    render() { 
        const user = this.props.match.params.user;
        let filtered = this.state.animals;
        if(user == 't'){
            filtered = 1?this.state.animals.filter(m=>m["status"].toString().includes("ACCEPTED_BY_ADMIN") ):this.state.animals;

        }else if(user =='a'){
            filtered = 1?this.state.animals.filter(m=>m["status"].toString().includes("PENDING_REQUEST") ):this.state.animals;
        }

        let alert = this.state.alertmsg;

        if(filtered.length==0){
            alert = "You have no more requests...";
        }
        
        
        
        
        
        
        return <React.Fragment>
                <NavBar user = {user}/>
                <div class="container">
                  
                </div>
            
            
           
                
                
                
        
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Breed</th>
                    <th>Owner</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {filtered.map(animal =>(
                    <tr key = {animal["animalId"].toString()}>
                    <td>{animal["animalId"].toString()}</td>
                    <td>{(animal["name"]==null) ? 'na' : animal["name"].toString()}</td>
                    <td>{(animal["breed"]==null) ? 'na' : animal["breed"].toString()}</td>
                    <td>{(animal["theOwner"]==null) ? 'na' : animal["theOwner"]["emailId"].toString()}</td>
                    <td>{(animal["status"]==null) ? 'na' : animal["status"].toString()}</td>
                    
                    <td><button onClick={(e) => this.handleAccept(e, animal)} className="btn btn-primary btn-sm">Accept</button><button onClick={(e) => this.handleReject(e, animal)} className="btn btn-primary btn-sm">Reject</button></td>
                    
                    </tr>

                ))}
            

                
                
            </tbody>
        </table>
        <div class="row">
                      <div class="col-sm">
                      {alert}
                      </div>
                      <div class="col-sm">
                        
                      </div>
                      <div class="col-sm">
                        
                      </div>
                      <div class="col-sm">
                        
                      </div>
                      <div class="col-sm">
                        
                      </div>
                      
        </div>
       
        

      </React.Fragment>
        ;
    }
}
 
export default RequestManagement;