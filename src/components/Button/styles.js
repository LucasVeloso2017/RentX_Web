import styled from 'styled-components'
import { shade } from 'polished'

export const Container= styled.button`
    background:#DC1637;
    height:56px;
    border-radius:10px;
    border:0;
    padding:0 16px;

    color:#fff;
    font-weight:400;
    letter-spacing:0.5px;

    width:100%;
    margin-top:16px;
    transition: background-color 0.2s;

    &:hover{
        background:${shade(0.2,'#DC1637')};
    }

`