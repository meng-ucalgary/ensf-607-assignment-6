import React, { Component } from 'react';

class NavBar extends React.Component {
    render() { 
      const user = this.props.user;
      console.log(user)
      
        return <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">VetApp</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href={"/"+user+"/menu"}>Home <span class="sr-only">(current)</span></a>
            </li>
            
            
            <li class="nav-item">
              <a class="nav-link active" href="/">Sign Out</a>
            </li>
          </ul>
          
        </div>
      </nav>;

      
        
    }    
}
 
export default NavBar;