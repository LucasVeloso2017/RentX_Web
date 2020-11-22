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

        button{
            background:transparent;
            font-size:17px;
            color:#FFF;
            border:0;
        }
    }
`