import styled,{css} from 'styled-components'
import { shade } from 'polished'


export const Container = styled.div`
    width:100%;
    height:90vh;

    background:#29292E;
    position:relative;

    .bg{
        position:absolute;
        width:100%;
        height:90vh;
    }

    .apresentation{
        width:100%;
        height:90vh;
        display:flex;
        justify-content:space-around;
        align-items:center;
        
        .quote{
            width:40%;

            font-size:25px;
            color:#FFF;
            line-height:1.2;

            strong{    
                font-size:35px;
            }
            span{
                color:#DC1637;
            }
            
            button{
                padding:20px;
                border-radius:10px;
                border:0;
                color:#fff;
                font-weight:600;
                letter-spacing:0.5px;
                background:#DC1637;
            }
        }
        
        .car{
            width:350px;
        }
    }

`

export const Content = styled.div`
    width:100%;
    background:#EBEBF0;
    color:#29292E;
    
    h2{
        padding:30px 0px;
        text-align:center;
    }

    .choices{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
`