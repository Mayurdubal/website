import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';  
// import App from './App';
// import User from './User'
// import Login from './User';
import {LoginComponent}  from './components/login/login.component';
import { NetflixIndex } from './netflix/netflix-index/netflix-index';
import {DataBindingComponent} from './components/data-binding/databinding.component';

import { Hooks } from './Hooks/hooks.usetate';

import { NasaComponent } from './components/nasa/nasa.component';
import { FackStoreApi } from './components/Shopping/fackstorapi.component';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    // <App /> 
    // <LoginComponent/>
//    <NetflixIndex/>

//  <DataBindingComponent/>/

//  <Hooks/> 
// <NasaComponent/>

<FackStoreApi/>

);
