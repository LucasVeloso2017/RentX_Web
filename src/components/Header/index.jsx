import React from 'react';
import { Link } from "react-router-dom";

import { Container } from './styles';


import Logo from '../../assets/logo.svg'
import Simbol from '../../assets/simbol.svg'

const Header = () => {
  return(
    <Container>
        <img src={Simbol} className="simbol"/>
       
        <img src={Logo} className="logo"/>

        <div className="controls">
            <Link to="/signin">
              Entrar
            </Link>
        </div>
    </Container>
  );
}

export default Header;