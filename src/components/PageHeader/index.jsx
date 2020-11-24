import React from 'react';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, { formatDate,parseDate} from 'react-day-picker/moment';
import 'moment/locale/pt-br';


import {FiSearch} from 'react-icons/fi'

import { Container,Content } from './styles';

import Logo from '../../assets/logo.svg'

function PageHeader({title,children}) {

    return(
        <>
            <Container>
                <h1>{title}</h1>
                <img src={Logo}/>
            </Container>
            <Content>
                {children}
            </Content>
        </>
    );
}

export default PageHeader;