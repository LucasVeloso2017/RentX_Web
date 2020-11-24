import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom'

import Main from '../pages/Main';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

import Home from '../pages/App/Home';


function Routes() {
  return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/signin" component={Signin}/>
            <Route path='/signup' component={Signup}/>
            
            {/*Rotas Privadas */}
            
            <Route path='/:id' component={Home}/>
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;