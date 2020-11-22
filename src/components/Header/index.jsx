import React from 'react';

import { Container } from './styles';


import Logo from '../../assets/logo.svg'
import Simbol from '../../assets/simbol.svg'

const Header: React.FC = () => {
  return(
    <Container>
        <img src={Simbol} className="simbol"/>
       
        <img src={Logo} className="logo"/>

        <div className="controls">
            <button>
                Entrar
            </button>
        </div>
    </Container>
  );
}

export default Header;