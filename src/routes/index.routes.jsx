import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom'

import Main from '../pages/Main';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';


function Routes() {
  return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/signin" component={Signin}/>
            <Route path='/signup' component={Signup}/>
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;