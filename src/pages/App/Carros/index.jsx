import React from 'react';

import Menu from '../../../components/Menu';
import PageHeader from '../../../components/PageHeader';
import CardLarger from '../../../components/CardLarger';

import Lambo from '../../../assets/lambo.png'
import Volvo from '../../../assets/volvo.png'
import Porche from '../../../assets/porche.png'

import {FiSearch} from 'react-icons/fi'

import { Container } from './styles';

function Carros() {
  return(
    <>
      <PageHeader title="Listagem">
        <input type="text" name="search" placeholder="Qual carro você procura?"/>
        <button>
          <FiSearch size={20}/>
        </button>
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
          <CardLarger
            car="Volvo"
            model="XC40"
            price={260}
            picture={Volvo}
          />
          <CardLarger
            car="Porche"
            model="Panamera"
            price={380}
            picture={Porche}
          />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Carros;