import React, { useEffect,useState } from 'react';

import{Link, useParams, use} from 'react-router-dom'

import {FiCalendar,FiUser,FiHome} from 'react-icons/fi'
import {FaCar} from 'react-icons/fa'

import { Container } from './styles';

function Menu() {
    const { id } = useParams()
    
    useEffect(()=>{
        const menu = document.getElementById(`${id}`)
        if(menu){
            menu.setAttribute("id","selected")
        }
    },[id])

    return(
        <Container>
            <aside>
                <ul>
                    <li id="home">
                        <Link to="#">
                            <FiHome size={20}/> Home
                        </Link>
                    </li>
                    <li id="carros">
                        <Link to="#">
                            <FaCar size={20}/> Carros
                        </Link>
                    </li>
                    <li id="agendamentos">
                        <Link to="#">
                            <FiCalendar size={20}/> Agendamentos
                        </Link>
                    </li>
                    <li>
                        <Link to="perfil">
                            <FiUser size={20}/> Perfil
                        </Link>
                    </li>
                </ul>
            </aside>
        </Container>
    );
}

export default Menu;