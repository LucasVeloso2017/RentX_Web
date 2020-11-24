import React from 'react';

import Menu from '../../../components/Menu';
import PageHeader from '../../../components/PageHeader';
import CardLarger from '../../../components/CardLarger';
import Information from '../../../components/Information';

import Lambo from '../../../assets/lambo.png'
import Volvo from '../../../assets/volvo.png'
import Porche from '../../../assets/porche.png'

import {FiSearch} from 'react-icons/fi'

import { Container } from './styles';

function Agendamentos() {
  return(
    <>
      <PageHeader title="Agendamentos">
        <br/><br/>
      </PageHeader>
      <Container>
        <Menu/>
        <div className="list">
          <div className="scroll">
            <CardLarger 
              car="lamborghini"
              model="huracan"
              price={500}
              picture={Lambo}
            />
            <Information 
              states={true}
              time="17 Junho 2020"
              initial="18 Junho 2020"
              final="22 Junho 2020"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Agendamentos;