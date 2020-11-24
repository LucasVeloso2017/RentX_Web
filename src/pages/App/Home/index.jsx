import React from 'react';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, { formatDate,parseDate} from 'react-day-picker/moment';
import 'moment/locale/pt-br';

import {FiSearch} from 'react-icons/fi'

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
      <PageHeader title="Escolha a data e encontre um carro.">

        <DayPickerInput
          name="initialDate"
          formatDate={formatDate}
          parseDate={parseDate}
          format="LL"
          placeholder={`${formatDate(new Date(), 'LL', 'pt-br')}`}
          dayPickerProps={{
            locale: 'pt-br',
            localeUtils: MomentLocaleUtils,
          }}
        />
        <DayPickerInput
          name="finalDate"
          formatDate={formatDate}
          parseDate={parseDate}
          format="LL"
          placeholder={`${formatDate(new Date(), 'LL', 'pt-br')}`}
          dayPickerProps={{
            locale:'pt-br',
            localeUtils: MomentLocaleUtils,
          }}
        />
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

export default Home;