import React from 'react';

import CardLarger from '../../../components/CardLarger';
import Menu from '../../../components/Menu';
import PageHeader from '../../../components/PageHeader';

import Lambo from '../../../assets/lambo.png'
import Volvo from '../../../assets/volvo.png'
import Porche from '../../../assets/porche.png'

import { Container } from './styles';

function Home() {
  return(
    <>
      <PageHeader title="Escolha a data e encontre um carro." />
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

export default Home;