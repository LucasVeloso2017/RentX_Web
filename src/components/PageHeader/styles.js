import styled from 'styled-components';
import { shade } from 'polished'

export const Container = styled.div`
    width:100%;
    height:30vh;
    background:#1B1B1F;

    display:flex;
    justify-content:space-around;
    align-items:center;

    h1{
        color:#fff;
        width:250px;
    }
  
`;
export const Content = styled.div`
    margin-top:-30px;
    padding:10px 0;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;


    input{
        margin-left:10px;
        padding:15px;
        border:0;
        background:#DEDEE3;
        border-radius:5px;
        color:#47474D;
    }
    button{
        margin-left:10px;
        padding:10px;
        border:0;
        background:#DC1637;
        color:#FFF;
        border-radius:5px;
        
        &:hover{
            background:${shade(0.2,'#DC1637')};
        }
    }
`;
