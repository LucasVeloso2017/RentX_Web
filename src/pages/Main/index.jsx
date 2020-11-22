import React from 'react';
import Header from '../../components/Header';

import { Container, Content } from './styles';

import SimbolVased from '../../assets/simbolVased.png'
import Simbol from '../../assets/simbol.svg'
import Card from '../../components/Card';

import Lambo from '../../assets/lambo.png'
import Volvo from '../../assets/volvo.png'
import Porche from '../../assets/porche.png'
import Footer from '../../components/Footer';

const Main = () => {
  return(
    <>
      <Header/>
      <Container>
        <img src={SimbolVased} alt="" className="bg"/>
        
        <div className="apresentation">
          <div className="quote">
              <strong>Rent<span>X</span></strong>
              <br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Dolorem totam repellat architecto quos hic optio ex, sequi praesentium voluptas 
              voluptatum exercitationem consectetur at corrupti. Eligendi vero tempora minus vitae nemo.
          </div>
    
          <img src={Simbol} alt="" className="car"/>
        </div>
      </Container>
      <Content>
        <h2>Escolhas Mais Populares</h2>
        <div className="choices">
          <Card
            car="lamborghini"
            model="huracan"
            price={500}
            picture={Lambo}
          />
          <Card
            car="Volvo"
            model="XC40"
            price={260}
            picture={Volvo}
          />
          <Card
            car="Porche"
            model="Panamera"
            price={380}
            picture={Porche}
          />
        </div>
        <br/><br/><br/>
      </Content>
      <Footer/>
    </>
  );
}

export default Main;