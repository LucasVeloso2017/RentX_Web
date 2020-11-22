import React from 'react';

import { Container} from './styles';

import Logo from '../../assets/logo.svg'
import Simbol from '../../assets/simbol.svg'

const SplashScreen: React.FC = () => {
  return(
    <>
        <Container>
            <img src={Simbol} className="simbol"/>
            <img src={Logo}   className="logo"/>
        </Container>
    </>
  )
}

export default SplashScreen;
