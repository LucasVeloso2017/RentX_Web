import React, { useRef } from 'react';
import {FiLogIn,FiMail,FiLock,FiUser} from 'react-icons/fi'

import { Link } from "react-router-dom";
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';


import SimbolVased from '../../assets/simbolVased.png'
import Simbol from '../../assets/simbol.svg'

import { Content,Container,Background,AnimationContainer  } from './styles';

function Signin() {

  const formRef = useRef(null)


  return(
    <>
      <Container>
        <Background>
          <img src={SimbolVased} alt="" className="bg"/>    
          <img src={Simbol} alt="" className="car"/>
        </Background>

        <Content>
          <AnimationContainer>

            <Form ref={formRef} onSubmit={()=>{}}>
              <h1>Crie sua conta.</h1>
              <p>
                Faça seu cadastro de 
                <br/>
                forma rápida e fácil.
              </p>
              <br/>
              <Input name="nome" icon={FiUser} type="text" placeholder="Email" />
              <Input name="email" icon={FiMail} type="text" placeholder="Email" />
              <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
              <Button type="submit">Entrar</Button>

              <Link to='/signin'>Já possuo uma conta</Link>
            </Form>
                                  
          </AnimationContainer>
        </Content>
      </Container>
    </>
  );
}

export default Signin;