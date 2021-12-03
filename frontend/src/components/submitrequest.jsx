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
class RequestSubmission extends React.Component {
    state = {
        animals: [],
        //animals: getAnimals(),
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


    handleRequest =(e, animal)=>{
      if(animal["status"]=="PENDING_REQUEST"|| animal["status"]=="ACCEPTED_BY_ADMIN" || animal["status"]=="TECHNICIAN_APPROVAL"||animal["status"]=="Delivered" ){
        this.setState({alertmsg:"  Request already in progress for: " + animal["name"]});
      }else{
        this.setState({alertmsg:"  Request is awaiting approval for: " + animal["name"]});
        postAnimal(animal["animalId"], "status", "PENDING_REQUEST");
        //this.setState({animals: getAnimals()});

      }


      

    };

    handleCancel =(e, animal)=>{
      if(animal["status"]=="PENDING_REQUEST"|| animal["status"]=="ACCEPTED_BY_ADMIN"){
        
        this.setState({alertmsg:"  Request cancelled for: " + animal["name"]});
        postAnimal(animal["animalId"], "status", "GREEN");
        
       // this.setState({animals: getAnimals()});



      } else if(animal["status"]=="TECHNICIAN_APPROVAL" ){
        
        this.setState({alertmsg:"  Request cannot be cancelled for: " + animal["name"]});
        



      }

      else if(animal["status"]=="Delivered" ){
        
        this.setState({alertmsg:"  Delivery Already Complete for: " + animal["name"]});
        



      }

      else{
        this.setState({alertmsg:"  Invalid Request"});
        
      }
      
      

      
      //this.setState({animals: getAnimals()});

    };

    async componentDidMount() {
        
      const {data: animals} = await axios.get('http://localhost:8080/api/v1/animals/', {headers: {'Access-Control-Allow-Origin': true,},});
      
      this.setState({animals});

      
          
      //const promise = axios.get('https://jsonplaceholder.typicode.com/posts')
      
  }




    render() { 
      const user = this.props.match.params.user;

        let filtered = this.state.animals;
        if (this.state.filterOption == 1) {
          filtered = 1?this.state.animals.filter(m=>m["animalId"].toString().toLowerCase().includes(this.state.filterText.toLowerCase()) ):this.state.animals;
        } else if (this.state.filterOption == 2) {
          filtered = 1?this.state.animals.filter(m=>m["name"].toString().toLowerCase().includes(this.state.filterText.toLowerCase()) ):this.state.animals;
        } else if (this.state.filterOption == 3) {
          filtered = 1?this.state.animals.filter(m=>m["breed"].toString().toLowerCase().includes(this.state.filterText.toLowerCase()) ):this.state.animals;
        } else if (this.state.filterOption == 4) {
          filtered = 1?this.state.animals.filter(m=>m["theOwner"]["emailId"].toString().toLowerCase().includes(this.state.filterText.toLowerCase())):this.state.animals;
        } else if (this.state.filterOption == 5) {
          filtered = 1?this.state.animals.filter(m=>m["status"].toString().toLowerCase().includes(this.state.filterText.toLowerCase()) ):this.state.animals;
        } else{
          filtered = this.state.animals;
        }
        console.log(filtered);
        
          
          
        
        
        
        return <React.Fragment>
                <NavBar user = {user}/>
                <div class="container">
                  
                </div>
                <div className="input-group mb-3">
                    
                    <label className="input-group-text" htmlFor ="inputGroupSelect01">Search For</label>
                    <select   onChange = {(e) => this.handleFilter(e)} value = {this.state.filterOption}  className="form-select" id="selectFilter" >
                        <option value = "0">No Filter</option>
                        <option value="1">ID</option>
                        <option value="2">Name</option>
                        <option value="3">Breed</option>
                        <option value="4">Owner's Email</option>
                        <option value="5">Status</option>
                    </select>
                </div>

                <div className="input-group mb-3">
                    < input type="text" id="inputFilter" onChange = {(e) => this.handleFilterText(e)} value = {this.state.filterText} className="form-control" placeholder="Enter Your Search Term Here" aria-label="Enter Your Search Term Here" aria-describedby="basic-addon2" />
                    
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
                    
                    <td><button  onClick = {(e) => this.handleRequest(e, animal)} className="btn btn-primary btn-sm">Request</button><button  onClick = {(e) => this.handleCancel(e, animal)} className="btn btn-primary btn-sm">Cancel</button></td>
                    
                    </tr>

                ))}
            

                
                
            </tbody>
        </table>
        <div class="row">
                      <div class="col-sm">
                      {this.state.alertmsg}
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
 
export default RequestSubmission;