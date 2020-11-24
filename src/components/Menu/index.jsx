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
                    <li id="1">
                        <Link to="/home/1">
                            <FiHome size={20}/> Home
                        </Link>
                    </li>
                    <li id="2">
                        <Link to="/carros/2">
                            <FaCar size={20}/> Carros
                        </Link>
                    </li>
                    <li id="3">
                        <Link to="/agendamentos/3">
                            <FiCalendar size={20}/> Agendamentos
                        </Link>
                    </li>
                    <li id="4">
                        <Link to="/perfil/4">
                            <FiUser size={20}/> Perfil
                        </Link>
                    </li>
                </ul>
            </aside>
        </Container>
    );
}

export default Menu;