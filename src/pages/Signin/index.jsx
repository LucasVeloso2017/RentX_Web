import React, { useRef } from 'react';
import {FiLogIn,FiMail,FiLock} from 'react-icons/fi'

import { Link } from "react-router-dom";
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';


import SimbolVased from '../../assets/simbolVased.png'
import Logo from '../../assets/logo.svg'

import { Content,Container,Background,AnimationContainer  } from './styles';

function Signin() {

  const formRef = useRef(null)


  return(
    <>
      <Container>
        <Content>
          <AnimationContainer>

            <Form ref={formRef} onSubmit={()=>{}}>
              <h1>Estamos quase lá.</h1>
              <p>
              Faça seu login para começar 
              <br/>
              uma experiência incrível.
              </p>
              <br/><br/>
                <Input name="email" icon={FiMail} type="text" placeholder="Email" />
                <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                <Button type="submit">Entrar</Button>

                <Link to='#'>Esqueci minha senha</Link>
             </Form>
                    
              <Link to='/signup'><FiLogIn/>  Criar conta</Link>
                    
          </AnimationContainer>
        </Content>
        <Background>
          <img src={SimbolVased} alt="" className="bg"/>          
          <img src={Logo} className="logo"/>
        </Background>
      </Container>
    </>
  );
}

export default Signin;