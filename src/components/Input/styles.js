import styled,{css} from 'styled-components'
import { shade } from 'polished'

export const Container= styled.div`
    
    background:#DEDEE3;
    border-radius:5px;
    padding:16px;
    width:100%;
    display:flex;
    align-items:center;

    color:white;
    border:2px solid #DEDEE3;
    transition:border,color 0.2s;

    ${props => props.isErrored && css`
        
        border:2px solid red;
    ` }

    ${props => props.isFocused ? css`
        color:#DC1637;
        border:2px solid #DC1637;
        `: css` 
            color:#7A7A80;
        ` 
    }

    ${props => props.isFiled && css`
        color:#DC1637;
    ` }
    

    & + div{
        margin-top:10px;
    }
    input{
        color: #47474D;
        flex:1;
        border:0;
        background:transparent;        
    }   

    svg{
        margin-right:16px;
    }

`
export const Error = styled("")`
    height:20px;
    margin-left:16px;
    svg{
        margin:0;
    }

    span{
        background:#c53030;
        color:#fff;
    }

    &::before{
        content:'';
        border-color:#c53030 transparent;
    }

`