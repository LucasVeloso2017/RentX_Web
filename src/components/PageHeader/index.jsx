import React from 'react';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, { formatDate,parseDate} from 'react-day-picker/moment';
import 'moment/locale/pt-br';


import {FiSearch} from 'react-icons/fi'

import { Container,Content } from './styles';

import Logo from '../../assets/logo.svg'

function PageHeader({title}) {

    return(
        <>
            <Container>
                <h1>{title}</h1>
                <img src={Logo}/>
            </Container>
            <Content>
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
                    locale: 'pt-br',
                    localeUtils: MomentLocaleUtils,
                    }}
                />
                <button>
                    <FiSearch size={20}/>
                </button>
            </Content>
        </>
    );
}

export default PageHeader;