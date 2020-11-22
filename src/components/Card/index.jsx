import React from 'react';

import { Container } from './styles';
import Lambo from '../../assets/lambo.png'


const Card = (props) => {
  return(
    <Container>
        <div className="car-infos">
            <div className="car">
                <label id="car-name">{props.car}</label>
                <label id='car-model'>{props.model}</label>
            </div>
            <div className="values">
                <label id="time">ao dia</label>
                <label id='price'>R${props.price}</label>
            </div>
        </div>
        <div className="car-picture">
            <img src={props.picture}/>
        </div>
    </Container>
  )
}

export default Card;