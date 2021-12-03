import React from "react";
import reactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter } from "react-router-dom";
import 'font-awesome/css/font-awesome.css';
import './index.css';
import App from "./App";
import AnimalManagement from "./components/animalmanagement";
import Login from "./components/login";
import { Route, Switch } from 'react-router-dom';
import { Routes } from 'react-router';
import NavBar from "./components/navbar";
import AnimalProfile from "./components/animalprofile";
import NavBarStart from './components/navbarstart';
import RegistrationPage from "./components/registerpage";
import UserManagement from './components/usermanagement';
import YourAccount from "./components/youraccount";
import UserDetails from "./components/userdetails";
import MainMenu from "./components/mainmenu";
import axios from "axios";
import ErrorPage from './components/errorpage';
import HomePage from './components/homepage';
import CommentList from "./components/commentlist";
import IssueList from "./components/issuelist";
import TreatmentList from "./components/treatmentlist";



reactDom.render(
    <BrowserRouter>
        <Switch>
            <Route path='/users/:id' component={UserDetails} />
            <Route path="/animals/:id/comments" component={CommentList} />
            <Route path="/animals/:id/issues" component={IssueList} />
            <Route path="/animals/:id/treatments" component={TreatmentList} />
            <Route path="/animals/:id" component={AnimalProfile} />
            <Route path="/animals" component={AnimalManagement} />
            <Route path="/users" component={UserManagement} />
            <Route path="/login" component={Login} />
            <Route path='/register' component={RegistrationPage} />
            <Route path='/youraccount' component={YourAccount} />
            <Route path="/menu" component={MainMenu} />
            <Route path="/" component={HomePage} />
            <Route path='*' component={ErrorPage} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));
