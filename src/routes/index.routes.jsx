import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom'

import Main from '../pages/Main';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

import Home from '../pages/App/Home';
import Carros from '../pages/App/Carros';
import Agendamentos from '../pages/App/Agendamentos';
import Perfil from '../pages/App/Perfil';


function Routes() {
  return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/signin" component={Signin}/>
            <Route path='/signup' component={Signup}/>
            
            {/*Rotas Privadas */}
            
            <Route path='/home/:id' component={Home}/>
            <Route path='/carros/:id' component={Carros}/>
            <Route path='/agendamentos/:id' component={Agendamentos}/>
            <Route path='/perfil/:id' component={Perfil}/>
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;