import React, { Component } from 'react';
class RegistrationPage extends React.Component {
    render() { 
        return <React.Fragment>
            <div class="card" style={this.styles}>
                
                <div class="card-body">
                    <h5 class="card-title">Register for an Account Now</h5>
                    <div class="row">
                      <div class="col-sm">
                      < input type="text" id="inputFilter"  className="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon2" />
                    
                      </div>
                      <div class="col-sm">
                      < input type="text" id="inputFilter" className="form-control" placeholder="Middle Name" aria-label="Middle Name" aria-describedby="basic-addon2" />
                    
                      </div>
                      <div class="col-sm">
                      < input type="text" id="inputFilter" className="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon2" />
                    
                      </div>
                      
                      
                    </div>

                    <div class="row">
                    <select   className="form-select" id="selectFilter" >
                        <option value = "0">Student</option>
                        <option value="1">Technician</option>
                        <option value="2">Teacher</option>
                        <option value="3">Admin</option>
                        
                    </select>

                    </div>
                    <div class="row">
                    < input type="text" id="inputFilter" className="form-control" placeholder="Email Address" aria-label="Email Address" aria-describedby="basic-addon2" />
                    </div>
                    <div class="row">
                    < input type="text" id="inputFilter" className="form-control" placeholder="Create Password" aria-label="Create Password" aria-describedby="basic-addon2" />
                    </div>

                    <a href="\" class="btn btn-primary">Register</a>
                </div>
            </div>
        </React.Fragment>;
    }
}
 
export default RegistrationPage;