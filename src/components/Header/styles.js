import styled,{css} from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
    width:100%;
    height:10vh;

    background:#1B1B1F;

    display:flex;
    justify-content:space-between;
    align-items:center;

    .simbol{
        width: 30px;
        margin-left:20px;
    }
    .logo{
        width: 130px;
    }
    .controls{
        margin-right:20px;

        a{
            background:#DC1637;
            padding:10px;
            font-size:17px;
            border-radius:5px;
            letter-spacing:0.5px;
            color:#FFF;
            font-weight:600;
            border:0;
        }
    }
`