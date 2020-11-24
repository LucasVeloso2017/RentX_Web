import React, { useEffect, useState } from 'react';

import { Container,Listed,Staged } from './styles';

import {FiArrowRight} from 'react-icons/fi'

function agendado(time){
    return(
        <Listed>
            <h1>Utilizando até {time}</h1>
        </Listed>
    )
}

function aguardo(initial,final){
    return(
        <Staged>
            <h2>PERIODO</h2>
            <div className="period">
                <h1>{initial}</h1>
                <FiArrowRight size={20}/> 
                <h1>{final}</h1>
            </div>
        </Staged>
    )
}

function Information({states,time,initial,final}) {

    const[state,setState]=useState(null)

    useEffect(()=>{
        console.log(states)
        setState(states)
    },[states])

    return(
        <Container>
            {state ? agendado(time) :aguardo(initial,final)}
        </Container>
    );
}

export default Information;