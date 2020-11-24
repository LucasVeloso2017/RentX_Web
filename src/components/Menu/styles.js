import styled,{css} from 'styled-components';
import { shade } from 'polished'

export const Container = styled.div`
    width:20%;
    height:60vh;
    background:#AEAEB3;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;

    display:flex;
    justify-content:center;
    align-items:center;

    aside{

        ul{
            li{
                padding:20px;
                transition:background 1s;
                
                &:hover{
                    border-radius:10px;
                    background:${shade(0.2,'#AEAEB3')};
                }

                a{
                    text-decoration:none;
                    color:#47474D;
                    font-weight:600;
                    letter-spacing:0.5px;
                    

                    svg{
                        padding-top:2px;
                        color:#DC1637;
                    }
                }
            }
        }
    }


    #selected{
        border-radius:10px;
        background:${shade(0.2,'#AEAEB3')};
    }

`;
